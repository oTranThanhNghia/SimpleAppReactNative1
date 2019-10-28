import * as types from 'app/features/home/actionNames';
import { BaseParamAction, ParamTopHeadlines } from 'app/types/ActionTypes';
import { BaseResponse } from 'app/types/ResponseTypes';

const TAG = 'Home-action';

export function requestTopHeadlines(
  country: string,
  page: number,
  pageSize: number,
  isRefreshing: boolean,
  initialData: ?BaseResponse
): ParamTopHeadlines {
  console.log(TAG + ' requestTopHeadlines() initialData= ' + JSON.stringify(initialData));
  return {
    type: types.HOME_REQUEST,
    country,
    page,
    pageSize,
    isRefreshing,
    initialData,
  };
}

export function requestTopHeadlinesFailed(): BaseParamAction {
  console.log(TAG + ' requestTopHeadlinesFailed() ');
  return {
    type: types.HOME_FAILED,
  };
}

export function onTopHeadlinesResponse(response) {
  console.log(TAG + ' onTopHeadlinesResponse() response= ' + JSON.stringify(response));
  return {
    type: types.HOME_RESPONSE,
    response,
  };
}

export function enableLoader(): BaseParamAction {
  console.log(TAG + ' enableLoader() ');
  return {
    type: types.HOME_ENABLE_LOADER,
  };
}

export function disableLoader(): BaseParamAction {
  console.log(TAG + ' disableLoader() ');
  return {
    type: types.HOME_DISABLE_LOADER,
  };
}
