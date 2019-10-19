import createReducer from 'app/lib/createReducer';
import * as types from 'app/features/home/actionNames';
import { ParamTopHeadlinesResponse, ParamTopHeadlines } from 'app/types/ActionTypes';

const TAG = 'HomeReducer';

const initialState = {
  status: 'none',
  page: 1,
  loading: true,
};

const handlers = {
  [types.HOME_REQUEST](state, action: ParamTopHeadlines) {
    console.log(TAG + ' --- ' + types.HOME_REQUEST + ' state= ' + JSON.stringify(state));
    console.log(TAG + ' --- ' + types.HOME_REQUEST + ' action= ' + JSON.stringify(action));
    return {
      ...state,
      loading: true,
      page: action.page,
    };
  },
  [types.HOME_RESPONSE](state, action: ParamTopHeadlinesResponse) {
    console.log(TAG + ' --- ' + types.HOME_RESPONSE + ' state= ' + JSON.stringify(state));
    const response = action.response;
    return {
      ...response,
    };
  },
  [types.HOME_FAILED](state) {
    console.log(TAG + ' --- ' + types.HOME_FAILED + ' state= ' + JSON.stringify(state));
    return {
      ...state,
    };
  },
};

console.log(TAG + ' handlers= ' + handlers);

export const homeReducer = createReducer(initialState, handlers);
