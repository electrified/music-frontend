import { createSlice } from '@reduxjs/toolkit'

import {makeRequest} from '../util'
import config from '../config'

const { actions, reducer } = createSlice({
  name: 'tracks',
  initialState: {
    loading: false,
    themusic: [],
    currentTrackUrl: '',
    playing: false,
  },
  reducers: {
    requestTracks: (state, action) => ({
      loading: true,
      themusic: [],
    }),
    receiveTracks: (state, action) => ({
      loading: false,
      themusic: action.payload,
    }),
    playNow: (state, action) => ({
      loading: false,
      themusic: action.payload,
    }),
  },
})

export const searchTracks = (query) => {
  return makeRequest(
    `${config.baseUrl}/playback/search?query=${query}`,
    actions.requestTracks,
    actions.receiveTracks,
    'GET',
    null
  )
}

export const {playNow} = actions

export default reducer
