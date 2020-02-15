export const makeRequest = (
  url,
  requestFn,
  responseFn,
  method = 'GET',
  body
) => (dispatch, getState) => {
  dispatch(requestFn())
  const token = getState().auth.token
  let headers = new Headers()
  headers.set('authorization', 'Bearer ' + token)
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
}
