import { createActions } from "redux-actions";

export const { requestTracks, receiveTracks } = createActions(
  "REQUEST_TRACKS",
  "RECEIVE_TRACKS"
);

export const searchTracks = query => dispatch => {
  dispatch(requestTracks());
  fetch(`http://localhost:8080/search?query=${query}`)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        dispatch(receiveTracks(data));
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
};
