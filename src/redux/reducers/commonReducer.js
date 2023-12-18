import { types } from '../actions';

const initialState = {
  progressTopLoadingBar: 0,
  isDarkMode: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION_COMMON_TOP_LOADING_BAR_PROGRESS:
      return {
        ...state,
        progressTopLoadingBar: action.payload,
      };

    case types.ACTION_COMMON_IS_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };

    default:
      return state;
  }
};

export default commonReducer;
