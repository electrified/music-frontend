import { handleActions } from 'redux-actions'
import { requestTracks, receiveTracks } from '../actions/library'
import { playNow } from '../actions/playback'

const initialState = {
  loading: false,
  themusic: [],
  currentTrackUrl: '',
  playing: false,
}

export default handleActions(
  {
    [requestTracks]: (state, action) => ({
      loading: true,
      themusic: [],
    }),
    [receiveTracks]: (state, action) => ({
      loading: false,
      themusic: action.payload,
    }),
    [playNow]: (state, action) => ({
      loading: false,
      themusic: action.payload,
    }),
  },
  initialState
)
