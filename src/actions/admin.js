import { createActions } from "redux-actions";

export const { requestSources, receiveSources, requestRescan, receiveRescan, requestMetadataUpdate, receiveMetadataUpdate, requestAddSource, responseAddSource } = createActions(
  "REQUEST_SOURCES",
  "RECEIVE_SOURCES",
  "REQUEST_RESCAN",
  "RECEIVE_RESCAN",
  "REQUEST_METADATA_UPDATE",
  "RECEIVE_METADATA_UPDATE",
  "REQUEST_ADD_SOURCE",
  "RESPONSE_ADD_SOURCE"
  );

export const makeRequest = (url, requestFn, responseFn, method = 'GET', body) => dispatch => {
  dispatch(requestFn());
  let username = 'user';
  let password = 'password';
  
  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

  let requestOptions = {
    method,
    headers: headers,
  };

  if (method === 'POST') {
    requestOptions['body'] = JSON.stringify(body);
    
    headers.set('content-type', "application/json; charset=utf-8");
  }

  fetch(url, requestOptions)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        dispatch(responseFn(data));
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
};

export const getSources = () => {
  return makeRequest('http://localhost:8080/admin/sources', requestSources, receiveSources)
};

export const getRescan = (id) => {
  return makeRequest(`http://localhost:8080/admin/sources/${id}/scan`, requestMetadataUpdate, receiveMetadataUpdate, 'POST')
};

export const getMetadataUpdate = (id) => {
  return makeRequest(`http://localhost:8080/admin/sources/${id}/meta`, requestRescan, receiveRescan, 'POST')
};

export const addSource = (path) => {
  return makeRequest('http://localhost:8080/admin/sources', requestAddSource, responseAddSource, 'POST', {'path': path})
};