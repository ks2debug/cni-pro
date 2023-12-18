import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';
import { Constants } from '../utils';
// import * as type from "../types.js";

export const types = {
  ACTION_NAVIGATION_BAR_DATA: 'navigationBar/ACTION_NAVIGATION_BAR_DATA',

  ACTION_COMMON_TOP_LOADING_BAR_PROGRESS: 'common/ACTION_COMMON_TOP_LOADING_BAR_PROGRESS',
  ACTION_COMMON_IS_DARK_MODE: 'common/ACTION_COMMON_IS_DARK_MODE',

  ACTION_STORE_RESET: 'ACTION_STORE_RESET',
};

export const action_navigation_bar_data = createAction(types.ACTION_NAVIGATION_BAR_DATA, (payload) => {
  return {
    payload,
  };
});

export const action_common_top_loading_bar_progress = createAction(types.ACTION_COMMON_TOP_LOADING_BAR_PROGRESS, (payload) => {
  return {
    payload,
  };
});

export const action_common_is_dark_mode = createAction(types.ACTION_COMMON_IS_DARK_MODE, (payload) => {
  return {
    payload,
  };
});

export const action_store_reset = createAction(types.ACTION_STORE_RESET);
