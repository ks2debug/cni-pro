/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast as toastToastify } from 'react-toastify';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { isNull, lowerCase } from 'lodash';
import toastHot, { Toaster } from 'react-hot-toast';
import { Constants, Images, LocalStorageManager, Utils } from './utils';
import { ProtectedRoute } from './components';
import { Loader, TopLoadingBar } from './components/atoms';
import ErrorPage from './components/pages/ErrorPage';
import PageNotFound from './components/pages/PageNotFound';
import OfflinePage from './components/pages/OfflinePage';
import { NavigationBar, Footer } from './components/organisms';
import { useCustomDispatchAction, useOnlineStatus } from './customHooks';
import HardcodedData from './testingStuff/HardcodedData';

const AssignmentOne = lazy(() => import('./components/pages/AssignmentOne'));
const AssignmentTwo = lazy(() => import('./components/pages/AssignmentTwo'));

function App() {
  const { progressTopLoadingBar } = useSelector((state) => state.common);
  const isOnline = useOnlineStatus();
  const { action_common_is_dark_mode } = useCustomDispatchAction();

  useEffect(() => {
    HardcodedData.app();
    (async () => {
      action_common_is_dark_mode(isNull(LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.IS_DARK_MODE)) ? Utils.isDarkModeEnabledInBrowser() : LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.IS_DARK_MODE));
      // eslint-disable-next-line no-use-before-define
      await initilization();
    })();
    return () => {};
  }, []);

  const initilization = async () => {
    // eslint-disable-next-line no-use-before-define
  };

  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <title>reactjs-pro-two</title>
        <meta name="description" content="Description for reactjs-pro-two" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<Loader />}>
          {isOnline ? (
            <>
              <TopLoadingBar progress={progressTopLoadingBar} />

              <NavigationBar />

              <Routes>
                <Route
                  path={Constants.ENUM_PATH.ASSIGNMENT_ONE}
                  element={
                    <ProtectedRoute>
                      <AssignmentOne />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path={Constants.ENUM_PATH.ASSIGNMENT_TWO}
                  element={
                    <ProtectedRoute>
                      <AssignmentTwo />
                    </ProtectedRoute>
                  }
                />

                <Route path="*" element={<PageNotFound />} />
              </Routes>

              {/* <Footer /> */}
            </>
          ) : (
            <OfflinePage />
          )}
        </Suspense>
      </ErrorBoundary>
      <ToastContainer />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
