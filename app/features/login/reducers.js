import createReducer from 'app/lib/createReducer';
import * as types from 'app/features/login/actionTypes';

const TAG = 'LoginReducer';

const initialState = {
  isLoggedIn: false,
  id: -1,
  username: '',
  password: '',
};

const handlers = {
  [types.LOGIN_REQUEST](state, action) {
    console.log(TAG + ' ' + types.LOGIN_REQUEST + ' state= ' + JSON.stringify(state));
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    console.log(TAG + ' ' + types.LOGIN_RESPONSE + ' state= ' + JSON.stringify(state));
    return {
      ...state,
      id: action.response.id,
    };
  },
  [types.LOGIN_FAILED](state) {
    console.log(TAG + ' ' + types.LOGIN_FAILED + ' state= ' + JSON.stringify(state));
    return {
      ...state,
      isLoggedIn: false,
    };
  },
};

console.log(TAG + ' handlers= ' + handlers);

export const loginReducer = createReducer(initialState, handlers);
