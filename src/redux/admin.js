import { createSlice } from '@reduxjs/toolkit'

import { makeRequest } from '../util'
import config from '../config'

const { actions, reducer } = createSlice({
  name: 'admin',
  initialState: {
    loading: false,
    sources: [],
    audioFiles: [],
  },
  reducers: {
    requestSources: (state, action) => {
      state.loading = true
    },
    responseSources: (state, action) => {
      state.loading = false
      state.sources = action.payload
    },
    requestRescan: (state, action) => {
      state.loading = true
    },
    responseRescan: (state, action) => {
      state.loading = false
    },
    requestMetadataUpdate: (state, action) => {
      state.loading = true
    },
    responseMetadataUpdate: (state, action) => {
      state.loading = false
    },
    requestAddSource: (state, action) => {
      state.loading = true
    },
    responseAddSource: (state, action) => {
      state.loading = false
    },
    requestDelete: (state, action) => {
      state.loading = true
    },
    responseDelete: (state, action) => {
      state.loading = false
    },
  },
})

export const getSources = () => {
  return makeRequest(
    `${config.baseUrl}/admin/sources`,
    actions.requestSources,
    actions.responseSources,
    'GET'
  )
}

export const getRescan = id => {
  return makeRequest(
    `${config.baseUrl}/admin/sources/${id}/scan`,
    actions.requestMetadataUpdate,
    actions.responseMetadataUpdate,
    'POST'
  )
}

export const getMetadataUpdate = id => {
  return makeRequest(
    `${config.baseUrl}/admin/sources/${id}/metadata`,
    actions.requestRescan,
    actions.responseRescan,
    'POST'
  )
}

export const addSource = path => {
  return makeRequest(
    `${config.baseUrl}/admin/sources`,
    actions.requestAddSource,
    actions.responseAddSource,
    'POST',
    { path: path }
  )
}

export const deleteSource = id => {
  return makeRequest(
    `${config.baseUrl}/admin/sources/${id}`,
    actions.requestAddSource,
    actions.responseAddSource,
    'DELETE'
  )
}

export const { requestSources, receiveSources } = actions
export default reducer
