import React from 'react';

class Constants {
  static ENUM_PATH = {
    ASSIGNMENT_ONE: '/',
    ASSIGNMENT_TWO: '/assignment-two',
  };

  static ENUM_ENVIRONMENT = {
    DEVELOPMENT: 'development',
    TEST: 'test',
    STAGING: 'staging',
    PRODUCTION: 'production',
  };

  static ENUM_METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    PATCH: 'patch',
  };

  static BASE_URL = process.env.REACT_APP_BASE_URL;

  static DEFAULT_ERROR_MESSAGE = 'Please try after some time';

  static PLEASE_TRY_AGAIN = 'Please try again';

  static LOADING_3_DOT = 'Loading...';

  static NO_DATA_TO_DISPLAY = 'No data to display';
}

export default Constants;
