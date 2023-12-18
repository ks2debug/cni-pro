// import { createStore } from "redux";
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { encryptTransform } from 'redux-persist-transform-encrypt';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/reducers';
import rootSaga from './sagas/sagas';
import { Constants } from '../utils';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['authType'], // which reducer want to store
  // blacklist: ['auth'] // Blacklist state that we do not need/want to persist
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY_REDUX_STORE_ENCRYPT,
      onError(error) {
        console.log('🚀 ~ file: storeConfigure.js:37 ~ error:', error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const storeConfigure = () => {
  const store = configureStore(
    {
      reducer: persistedReducer,
      middleware: [sagaMiddleware],
      devTools: !(process.env.REACT_APP_ENVIRONMENT === Constants.ENUM_ENVIRONMENT.STAGING || process.env.REACT_APP_ENVIRONMENT === Constants.ENUM_ENVIRONMENT.PRODUCTION),
    },
    {},
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);
  return { store, persistor };
};

export default storeConfigure;
