import { handleActions } from "redux-actions";
import { requestTracks, receiveTracks } from "../actions";

const initialState = {
  loading: false,
  themusic: []
};

const tracks = handleActions(
  {
    [requestTracks]: (state, action) => ({
      loading: true,
      themusic: []
    }),
    [receiveTracks]: (state, action) => ({
      loading: false,
      themusic: action.payload
    })
  },
  initialState
);
export default tracks;
