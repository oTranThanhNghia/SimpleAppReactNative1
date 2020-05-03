import { takeLatest } from 'redux-saga/effects';
import * as types from '../actionNames';
import fetchHomeTopHeadLines from './homeSaga';

export const homeSagas = [takeLatest(types.HOME_REQUEST, fetchHomeTopHeadLines)];
