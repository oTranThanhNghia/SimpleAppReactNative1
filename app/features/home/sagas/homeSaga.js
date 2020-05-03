import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as homeActions from '../actions';
import { getTopHeadlines } from '../../../repository/HomeRepository';
import { BaseResponse, BaseErrorResponse } from '../../../types/ResponseTypes';
import { ParamTopHeadlines } from '../../../types/ActionTypes';
import LodashArray from 'lodash/array';

const TAG = 'HomeSaga';

export default function* fetchHomeTopHeadLines(param: ParamTopHeadlines) {
  console.log(TAG + ' fetchHomeTopHeadLines data= ' + JSON.stringify(param));
  // yield put(homeActions.enableLoader());

  // call api
  const response: BaseResponse | BaseErrorResponse = yield call(
    getTopHeadlines,
    param.country,
    param.pageSize,
    param.page
  );

  // console.log(TAG + ' response= ' + JSON.stringify(response));

  if (response.status === 'ok') {
    const homeResponse: BaseResponse = {
      loading: false,
      isRefreshing: false,
      page: param.page,
      ...response,
    };
    console.log(
      TAG +
        ' mergedArray data.initialData= ' +
        param.initialData +
        ' homeResponse.articles= ' +
        homeResponse.articles
    );
    if (
      param.initialData &&
      param.initialData.articles &&
      homeResponse.articles &&
      param.isRefreshing === false
    ) {
      // check not null
      if (param.initialData.articles.length >= 0 && homeResponse.articles.length >= 0) {
        const mergedArray = LodashArray.concat(param.initialData.articles, homeResponse.articles);
        console.log(TAG + ' mergedArray= ' + JSON.stringify(mergedArray));
        homeResponse.articles = mergedArray;
      }
    }

    yield put(homeActions.onTopHeadlinesResponse(homeResponse));
    // yield put(homeActions.disableLoader({}));
  } else {
    yield put(homeActions.requestTopHeadlinesFailed());
    // yield put(homeActions.disableLoader({}));
    Alert.alert(response.message !== null ? response.message : 'Error!');
  }
}
