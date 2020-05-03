import { takeEvery } from 'redux-saga/effects';
import * as types from '../actionTypes';
import fetchLogin from './loginSaga';

export const loginSagas = [takeEvery(types.LOGIN_REQUEST, fetchLogin)];
