import { BaseResponse } from './ResponseTypes';

export type BaseParamAction = {
  type: string,
};

export type ParamTopHeadlinesResponse = {
  type: string,
  response: any,
};

export type ParamTopHeadlines = {
  type: string,
  country: string,
  page: number,
  pageSize: number,
  initialData: ?BaseResponse,
};
