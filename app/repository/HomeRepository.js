import Api from 'app/api/Api';
import ApiInstance from 'app/api/ApiInstance';
// import { BaseParam } from 'app/api/ApiModule';

export function getTopHeadlines(country: string, pageSize: number, page: number) {
  var params = {
    // ...BaseParam,
    country: country,
    pageSize: pageSize,
    page: page,
  };
  return ApiInstance.apiModule.get(Api.TOP_HEADLINES, { params: params });
}
