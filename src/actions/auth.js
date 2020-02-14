import { createActions } from 'redux-actions'
import { makeRequest } from './admin'
import config from '../config'
export const { requestTracks, receiveTracks } = createActions(
  'REQUEST_TRACKS',
  'RECEIVE_TRACKS'
)

export const searchTracks = query => {
  return makeRequest(
    `${config.baseUrl}/search?query=${query}`,
    requestTracks,
    receiveTracks
  )
}
