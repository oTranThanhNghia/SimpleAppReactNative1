import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as homeActions from 'app/features/home/actions';
import { getTopHeadlines } from 'app/repository/HomeRepository';
import { BaseResponse, BaseErrorResponse } from 'app/types/ResponseTypes';
import { ParamTopHeadlines } from 'app/types/ActionTypes';
import LodashArray from 'lodash/array';

const TAG = 'HomeSaga';

export default function* fetchHomeTopHeadLines(data: ParamTopHeadlines) {
  console.log(TAG + ' fetchHomeTopHeadLines data= ' + JSON.stringify(data));
  // yield put(homeActions.enableLoader());

  // call api
  const response: BaseResponse | BaseErrorResponse = yield call(
    getTopHeadlines,
    data.country,
    data.pageSize,
    data.page
  );

  // console.log(TAG + ' response= ' + JSON.stringify(response));

  if (response.status === 'ok') {
    const homeResponse: BaseResponse = { loading: false, page: data.page, ...response };
    console.log(
      TAG +
        ' mergedArray data.initialData= ' +
        data.initialData +
        ' homeResponse.articles= ' +
        homeResponse.articles
    );
    if (data.initialData && homeResponse.articles) {
      // check not null
      if (data.initialData.articles.length >= 0 && homeResponse.articles.length >= 0) {
        const mergedArray = LodashArray.concat(data.initialData.articles, homeResponse.articles);
        // TODO: keep going
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
