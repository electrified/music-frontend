import { handleActions } from 'redux-actions'
import { requestSources, receiveSources } from '../actions/auth'

const initialState = {
  loading: false,
  sources: [],
  audioFiles: [],
}

export default handleActions(
  {
    [requestSources]: (state, action) => ({
      loading: true,
      sources: [],
    }),
    [receiveSources]: (state, action) => ({
      loading: false,
      sources: action.payload,
    }),
  },
  initialState
)
