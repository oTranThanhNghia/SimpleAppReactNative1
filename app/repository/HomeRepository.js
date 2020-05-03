import Api from '../api/Api';
import ApiInstance from '../api/ApiInstance';

export function getTopHeadlines(country: string, pageSize: number, page: number) {
  var params = {
    // ...BaseParam,
    country: country,
    pageSize: pageSize,
    page: page,
  };
  return ApiInstance.apiModule.get(Api.TOP_HEADLINES, { params: params });
}
