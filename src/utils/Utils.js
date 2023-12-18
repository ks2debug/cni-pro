import React from 'react';
import CryptoJS from 'crypto-js';
import { isNull, isUndefined, isEmpty, lowerCase, isString, isNaN } from 'lodash';
import { toast as toastToastify } from 'react-toastify';
import dayjs from 'dayjs';
import { Constants, Images, LocalStorageManager } from './index';

class Utils {
  static nameTemp = 'Nyalkaran';

  static SECRET_KEY = process.env.REACT_APP_SECRET_KEY_CRYPTOJS;

  static disableAllConsoleSystemWide = () => {
    if (process.env.REACT_APP_ENVIRONMENT === Constants.ENUM_ENVIRONMENT.STAGING || process.env.REACT_APP_ENVIRONMENT === Constants.ENUM_ENVIRONMENT.PRODUCTION) {
      console.log = () => {};
      console.info = () => {};
      console.warn = () => {};
      console.error = () => {};
    }
  };

  static setScrolling_Enable_Desable = (isLoading, document) => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
    if (!isLoading) {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  };

  static getEncryptedData = (data) => {
    const dataEncrypted = CryptoJS.AES.encrypt(JSON.stringify(data), this.SECRET_KEY).toString();
    return dataEncrypted;
  };

  static getDecryptData = (dataEncrypted) => {
    if (!isNull(dataEncrypted) && !isUndefined(dataEncrypted) && !isEmpty(dataEncrypted)) {
      const dataDecrypt = CryptoJS.AES.decrypt(dataEncrypted, this.SECRET_KEY).toString(CryptoJS.enc.Utf8);
      if (!isNull(dataDecrypt) && !isUndefined(dataDecrypt) && !isEmpty(dataDecrypt)) {
        // return dataDecrypt
        return JSON.parse(dataDecrypt);
      }
      return '';
    }
    return '';
  };

  static getComponentNameInLowerCase_useLocation = (location) => {
    if (isNull(location) || isUndefined(location) || isEmpty(location)) {
      return '';
    }
    return location.pathname.replace('/', '');
  };

  static getComponentName = (Component, isInLowerCase) => {
    if (isNull(Component) || isUndefined(Component) || isEmpty(Component)) {
      return '';
    }
    return isInLowerCase ? lowerCase(Component.name) : Component.name;
  };

  static getCurrentURL = () => {
    return window.location.href;
  };

  static changeLanguage = (languageCode) => {
    if (!isUndefined(languageCode) && !isNull(languageCode) && !isEmpty(languageCode)) {
      let currentURL = this.getCurrentURL();
      if (currentURL.includes('?lng=')) {
        // eslint-disable-next-line prefer-destructuring
        currentURL = currentURL.split('?lng=')[0];
      }
      window.location.replace(`${currentURL}?lng=${languageCode}`);
    }
  };

  static getRandomNumberInRange = (min, max) => {
    if (isUndefined(min) || isUndefined(max) || isString(min) || isString(max)) {
      return 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  static scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  static reloadPage = () => {
    window.location.reload();
  };

  static isDarkModeEnabledInBrowser = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  static getCurrent_Date_Time_Day = (format) => {
    return dayjs(Date()).format(!isUndefined(format) && !isNull(format) && !isEmpty(format) ? format : 'DD-MMM-YYYY hh:mm A dddd');
  };
}

export default Utils;
