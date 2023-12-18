import React from 'react';
import { Navigate } from 'react-router-dom';
import { isEmpty, isNull, isUndefined } from 'lodash';
import { LocalStorageManager, Constants } from '../utils';

const ProtectedRoute = ({ children }) => {
  if (!isNull(LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.ACCESS_TOKEN)) && !isUndefined(LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.ACCESS_TOKEN)) && !isEmpty(LocalStorageManager.getDecryptedItem(LocalStorageManager.ENUM_LS_KEYS.ACCESS_TOKEN))) {
    return children;
  }
  return <Navigate to={Constants.ENUM_PATH.ASSIGNMENT_ONE} replace />;
};

export default ProtectedRoute;
