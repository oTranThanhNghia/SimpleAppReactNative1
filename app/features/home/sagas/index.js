import { takeLatest } from 'redux-saga/effects';
import * as types from 'app/features/home/actionNames';
import fetchHomeTopHeadLines from 'app/features/home/sagas/homeSaga';

export const homeSagas = [takeLatest(types.HOME_REQUEST, fetchHomeTopHeadLines)];
