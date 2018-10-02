import { createActions } from "redux-actions";
import {makeRequest} from './admin'
export const { requestTracks, receiveTracks } = createActions(
  "REQUEST_TRACKS",
  "RECEIVE_TRACKS"
);

export const searchTracks = query => {
  return makeRequest(`http://localhost:8080/search?query=${query}`, requestTracks, receiveTracks)
};
