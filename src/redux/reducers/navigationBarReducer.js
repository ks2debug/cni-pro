import { isUndefined } from 'lodash';
import { types } from '../actions';

const initialState = {
  currentPageName: '',
  title: '',
  clickedNavItemName: '',
};

const navigationBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ACTION_NAVIGATION_BAR_DATA:
      return {
        ...state,
        currentPageName: isUndefined(action.payload.currentPageName) ? state.currentPageName : action.payload.currentPageName,
        title: isUndefined(action.payload.title) ? state.title : action.payload.title,
        clickedNavItemName: isUndefined(action.payload.clickedNavItemName) ? state.clickedNavItemName : action.payload.clickedNavItemName,
      };

    default:
      return state;
  }
};

export default navigationBarReducer;
