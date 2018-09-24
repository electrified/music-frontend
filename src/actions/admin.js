import { createActions } from "redux-actions";

export const { requestSources, receiveSources, rescanSource, updateMetadata } = createActions(
  "REQUEST_SOURCES",
  "RECEIVE_SOURCES",
  "RESCAN_SOURCE",
  "UPDATE_METADATA"
);

export const getSources = () => dispatch => {
  dispatch(requestSources());
  let username = 'user';
  let password = 'password';
  
  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

  fetch(`http://localhost:8080/admin/sources`, {
      method:'GET',
      headers: headers,
    })
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        dispatch(receiveSources(data));
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
};
