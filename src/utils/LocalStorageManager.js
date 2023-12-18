import React from 'react';
import { isNull, isUndefined, isEmpty, isBoolean } from 'lodash';
import { Utils } from '.';

class LocalStorageManager {
  static ENUM_LS_KEYS = {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
    ROLE: 'role',
    FCM_REGISTRATION_TOKEN: 'fcm_registration_token',
    IS_DARK_MODE: 'isDarkMode',
  };

  static nameTemp = 'Hare hare';

  static isStorageAvailable = () => {
    // console.log('nameTemp = ', this.nameTemp)
    if (typeof Storage !== 'undefined') {
      return true;
    }
    return false;
  };

  static removeAllItems = (arrayExceptKeys) => {
    console.log('🚀 ~ file: LocalStorageManager.js:45 ~ LocalStorageManager ~ arrayExceptKeys:', arrayExceptKeys);
    if (!isNull(arrayExceptKeys) && !isUndefined(arrayExceptKeys) && !isEmpty(arrayExceptKeys)) {
      if (this.isStorageAvailable()) {
        const objException = {};
        arrayExceptKeys.forEach((value, index, array) => {
          objException[value] = this.getDecryptedItem(value);
        });
        localStorage.clear();
        Object.keys(objException).map((value, index, array) => {
          this.setEncryptedItem(value, objException[value]);
          return undefined;
        });
      }
    } else {
      localStorage.clear();
    }
  };

  static setEncryptedItem = (enum_ls_keys = this.ENUM_LS_KEYS, stringValue) => {
    if (this.isStorageAvailable()) {
      localStorage.setItem(enum_ls_keys, Utils.getEncryptedData(stringValue));
    }
  };

  static getDecryptedItem = (enum_ls_keys = this.ENUM_LS_KEYS) => {
    if (this.isStorageAvailable()) {
      const decryptData = Utils.getDecryptData(localStorage.getItem(enum_ls_keys));
      if (isBoolean(decryptData)) {
        return decryptData;
      }
      return isEmpty(decryptData) ? null : decryptData;
    }
    return null;
  };

  static removeSavedItem = (enum_ls_keys = this.ENUM_LS_KEYS) => {
    if (this.isStorageAvailable()) {
      localStorage.removeItem(enum_ls_keys);
    }
  };
}

export default LocalStorageManager;
