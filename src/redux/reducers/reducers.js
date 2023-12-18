// import { combineReducers } from "redux";
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { types } from '../actions';
import navigationBarReducer from './navigationBarReducer';
import commonReducer from './commonReducer';

const appReducer = combineReducers({
  navigationBar: navigationBarReducer,
  common: commonReducer,
});

const rootReducer = (state, action) => {
  if (action.type === types.ACTION_STORE_RESET) {
    state = undefined;
    storage.removeItem('persist:root');
  }
  return appReducer(state, action);
};

export default rootReducer;
