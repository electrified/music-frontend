import { createActions } from 'redux-actions'
import config from '../config'
export const {
  requestSources,
  receiveSources,
  requestRescan,
  receiveRescan,
  requestMetadataUpdate,
  receiveMetadataUpdate,
  requestAddSource,
  responseAddSource,
} = createActions(
  'REQUEST_SOURCES',
  'RECEIVE_SOURCES',
  'REQUEST_RESCAN',
  'RECEIVE_RESCAN',
  'REQUEST_METADATA_UPDATE',
  'RECEIVE_METADATA_UPDATE',
  'REQUEST_ADD_SOURCE',
  'RESPONSE_ADD_SOURCE'
)

export const makeRequest = (
  url,
  requestFn,
  responseFn,
  method = 'GET',
  body,
  auth
) => dispatch => {
  dispatch(requestFn())

  auth.getAccessToken().then(token => {
    console.log(token)
    let headers = new Headers()
    headers.set('Authorization', 'Bearer ' + token)
    let requestOptions = {
      method,
      headers,
    }

    if (method === 'POST') {
      requestOptions['body'] = JSON.stringify(body)

      headers.set('content-type', 'application/json; charset=utf-8')
    }
    for (var pair of headers.entries()) {
      console.log(pair[0] + ': ' + pair[1])
    }
    fetch(url, requestOptions)
      .then(function(response) {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          )
          return
        }

        // Examine the text in the response
        response.json().then(function(data) {
          dispatch(responseFn(data))
        })
      })
      .catch(function(err) {
        console.log('Fetch Error :-S', err)
      })
  })
}

export const getSources = auth => {
  return makeRequest(
    `${config.baseUrl}/admin/sources`,
    requestSources,
    receiveSources,
    'GET',
    null,
    auth
  )
}

export const getRescan = (id, auth) => {
  return makeRequest(
    `${config.baseUrl}/admin/sources/${id}/scan`,
    requestMetadataUpdate,
    receiveMetadataUpdate,
    'POST',
    null,
    auth
  )
}

export const getMetadataUpdate = (id, auth) => {
  return makeRequest(
    `${config.baseUrl}/admin/sources/${id}/metadata`,
    requestRescan,
    receiveRescan,
    'POST',
    null,
    auth
  )
}

export const addSource = (path, auth) => {
  return makeRequest(
    `${config.baseUrl}/admin/sources`,
    requestAddSource,
    responseAddSource,
    'POST',
    { path: path },
    auth
  )
}
