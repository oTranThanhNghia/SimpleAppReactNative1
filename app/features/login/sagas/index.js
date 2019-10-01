import { takeEvery } from 'redux-saga/effects';
import * as types from 'app/features/login/actionTypes';
import loginSaga from 'app/features/login/sagas/loginSaga';

export const loginSagas = [takeEvery(types.LOGIN_REQUEST, loginSaga)];
