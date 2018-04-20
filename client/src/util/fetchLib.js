import fetch from 'cross-fetch';

const handleError = (error, errorHandler) => {
  errorHandler(error);
}

const handleJsonResult = (result, successHandler) => {
  successHandler(result);
};

const responseAsJson = (response) => {
  return response.json();
};

const validateResponse = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
};

export const fetchJsonGet = (url, successHandler, errorHandler) => {
  fetch(url)
  .then(response => validateResponse(response))
  .then(response => responseAsJson(response))
  .then(jsonResult => { handleJsonResult(jsonResult, successHandler); })
  .catch((error) => { handleError(error, errorHandler); });
};

export const fetchJsonPostWithResult = (url, postedData, successHandler, errorHandler) => {
  const req = {
    method: 'POST',
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(postedData),
  };

  window.fetch(url, req) //cross-fetch BUG: application/json is sent as plain/text
  .then(response => validateResponse(response))
  .then(response => responseAsJson(response))
  .then(jsonResult => { handleJsonResult(jsonResult, successHandler); })
  .catch((error) => { handleError(error, errorHandler); });
};
