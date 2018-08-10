import { handleActions } from "redux-actions";
import { requestTracks, receiveTracks } from "../actions/library";
import {playNow} from '../actions/playback'

const initialState = {
  loading: false,
  themusic: [],
  currentTrackUrl: "",
  playing: false
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
    }),
    [playNow]: (state, action) => ({
      loading: false,
      themusic: action.payload
    })
  },
  initialState
);
export default tracks;
