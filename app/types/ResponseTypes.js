export type SourceObj = {
  id: ?string,
  name: ?string,
};

export type ArticleObj = {
  source: ?SourceObj,
  author: ?string,
  title: ?string,
  description: ?string,
  url: ?string,
  urlToImage: ?string,
  publishedAt: ?string,
  content: ?string,
};

export type BaseResponse = {
  status: ?string,
  totalResults: ?number,
  articles: ?Array<ArticleObj>,
  page: ?number,
  loading: ?boolean,
  isRefreshing: ?boolean,
};

export type BaseErrorResponse = {
  status: ?string,
  code: ?string,
  message: ?string,
};
