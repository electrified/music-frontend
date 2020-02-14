import { handleActions } from 'redux-actions'
import { requestSources, receiveSources } from '../actions/admin'

const initialState = {
  loading: false,
  sources: [],
  audioFiles: [],
}

const admin = handleActions(
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
export default admin
