import { createSlice } from '@reduxjs/toolkit'

import { makeRequest } from '../util'
import config from '../config'

const { actions, reducer } = createSlice({
  name: 'tracks',
  initialState: {
    loading: false,
    themusic: [],
    artists: [],
    currentTrackId: '',
    playing: false,
    audioBlob: null,
  },
  reducers: {
    requestTracks: (state, action) => {
      state.loading = true
    },
    receiveTracks: (state, action) => {
      state.loading = false
      state.themusic = action.payload
    },
    requestArtists: (state, action) => {
      state.loading = true
    },
    receiveArtists: (state, action) => {
      state.loading = false
      state.artists = action.payload
    },
    requestPlay: (state, action) => {
      console.log('requestPlay!' + action)
      state.loading = true
    },
    receivePlay: (state, action) => {
      console.log('receivePlay!' + action)
      state.loading = false
      state.audioBlob = action.payload
    },
    play: (state, action) => {
      state.currentTrackId = action.payload
    }
  },
})

export const searchTracks = query => {
  return makeRequest(
    `${config.baseUrl}/playback/search?query=${query}`,
    actions.requestTracks,
    actions.receiveTracks,
    'GET'
  )
}

export const getTracksByArtist = artistId => {
  return makeRequest(
    `${config.baseUrl}/playback/artists/${artistId}/tracks`,
    actions.requestTracks,
    actions.receiveTracks,
    'GET'
  )
}

export const getArtists = () => {
  return makeRequest(
    `${config.baseUrl}/playback/artists`,
    actions.requestArtists,
    actions.receiveArtists,
    'GET'
  )
}

export const getTrackAudio = trackId => {
  return makeBlobRequest(
    `${config.baseUrl}/audio/play/${trackId}`,
    actions.requestArtists,
    actions.receiveArtists
  )
}

export const makeBlobRequest = (url, requestFn, responseFn) => (
  dispatch,
  getState
) => {
  dispatch(requestFn())
  const token = getState().auth.token
  let headers = new Headers()
  headers.set('authorization', 'Bearer ' + token)
  let requestOptions = {
    headers,
  }

  fetch(url, requestOptions)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        )
        return
      }

      // Examine the text in the response
      response.blob().then(function(data) {
        dispatch(responseFn(data))
      })
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err)
    })
}

export const { playNow } = actions

export default reducer
