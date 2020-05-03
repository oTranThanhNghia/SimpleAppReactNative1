import * as types from './actionTypes';

const TAG = 'Login-action';

export function requestLogin(username, password) {
  console.log(TAG + ' requestLogin() ');
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
  };
}

export function loginFailed() {
  console.log(TAG + ' loginFailed() ');
  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response) {
  console.log(TAG + ' onLoginResponse() response= ' + JSON.stringify(response));
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  console.log(TAG + ' enableLoader() ');
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  console.log(TAG + ' disableLoader() ');
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}
