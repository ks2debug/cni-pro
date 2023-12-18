import React from 'react';
import { LocalStorageManager } from '../utils';

class HardcodedData {
  static stringName = '';

  static app = () => {
    LocalStorageManager.setEncryptedItem(LocalStorageManager.ENUM_LS_KEYS.ACCESS_TOKEN, 'Hardcoded access token');
  };

  static assignmentOne = () => {
    setTimeout(() => {}, 1000);
  };
}

export default HardcodedData;
