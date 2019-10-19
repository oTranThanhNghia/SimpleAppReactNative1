export default {
  /** Request parameters
  country:
  The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za . Note: you can't mix this param with the sources param.

  category:
  The category you want to get headlines for. Possible options: business entertainment general health science sports technology . Note: you can't mix this param with the sources param.

  sources:
  A comma-seperated string of identifiers for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index. Note: you can't mix this param with the country or category params.

  q:
  Keywords or a phrase to search for.

  pageSize (int):
  The number of results to return per page (request). 20 is the default, 100 is the maximum.

  page (int):
  Use this to page through the results if the total results found is greater than the page size.

  apiKey:
  REQUIRED
  Your API key. Alternatively you can provide this via the X-Api-Key HTTP header. 
  */
  TOP_HEADLINES: '/v2/top-headlines',

  /** Request parameters
  q:
  Keywords or phrases to search for in the article title and body.

  Advanced search is supported here:

  Surround phrases with quotes (") for exact match.
  Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
  Prepend words that must not appear with a - symbol. Eg: -bitcoin
  Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
  The complete value for q must be URL-encoded.

  qInTitle:
  Keywords or phrases to search for in the article title only.

  Advanced search is supported here:

  Surround phrases with quotes (") for exact match.
  Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
  Prepend words that must not appear with a - symbol. Eg: -bitcoin
  Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
  The complete value for qInTitle must be URL-encoded.

  sources:
  A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index.

  domains:
  A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.

  excludeDomains:
  A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.

  from:
  A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2019-10-14 or 2019-10-14T02:53:24) Default: the oldest according to your plan.

  to:
  A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2019-10-14 or 2019-10-14T02:53:24) Default: the newest according to your plan.

  language:
  The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ar de en es fr he it nl no pt ru se ud zh. Default: all languages returned.

  sortBy:
  The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
  relevancy = articles more closely related to q come first.
  popularity = articles from popular sources and publishers come first.
  publishedAt = newest articles come first.
  Default: publishedAt

  pageSize(int):
  The number of results to return per page. 20 is the default, 100 is the maximum.

  page(int):
  Use this to page through the results.

  apiKey
  REQUIRED
  Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
  */
  EVERY_THING: '/v2/everything',

  /** Request parameters
  category:
  Find sources that display news of this category. Possible options: business entertainment general health science sports technology . Default: all categories.

  language:
  Find sources that display news in a specific language. Possible options: ar de en es fr he it nl no pt ru se ud zh . Default: all languages.

  country:
  Find sources that display news in a specific country. Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za . Default: all countries.

  apiKey:
  REQUIRED
  Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
  */
  SOURCES: '/v2/sources',
};

/**
Errors
If you make a bad request we'll let you know by returning a relevant HTTP status code along with more details in the body.

Live example
Missing API key example
GET
https://newsapi.org/v2/everything?q=bitcoin
{
"status": "error",
"code": "apiKeyMissing",
"message": "Your API key is missing. Append this to the URL with the apiKey param, or use the x-api-key HTTP header."
}
Response object

status:
string
If the request was successful or not. Options: ok, error. In the case of ok, the below two properties will not be present.

code:
string
A short code identifying the type of error returned.

message:
string
A fuller description of the error, usually including how to fix it.

HTTP status codes summary:
200 - OK. The request was executed successfully.
400 - Bad Request. The request was unacceptable, often due to a missing or misconfigured parameter.
401 - Unauthorized. Your API key was missing from the request, or wasn't correct.
429 - Too Many Requests. You made too many requests within a window of time and have been rate limited. Back off for a while.
500 - Server Error. Something went wrong on our side.
Error codes:
When an HTTP error is returned we populate the code and message properties in the response containing more information. Here are the possible options:

apiKeyDisabled - Your API key has been disabled.
apiKeyExhausted - Your API key has no more requests available.
apiKeyInvalid - Your API key hasn't been entered correctly. Double check it and try again.
apiKeyMissing - Your API key is missing from the request. Append it to the request with one of these methods.
parameterInvalid - You've included a parameter in your request which is currently not supported. Check the message property for more details.
parametersMissing - Required parameters are missing from the request and it cannot be completed. Check the message property for more details.
rateLimited - You have been rate limited. Back off for a while before trying the request again.
sourcesTooMany - You have requested too many sources in a single request. Try splitting the request into 2 smaller requests.
sourceDoesNotExist - You have requested a source which does not exist.
unexpectedError - This shouldn't happen, and if it does then it's our fault, not yours. Try the request again shortly.
*/
