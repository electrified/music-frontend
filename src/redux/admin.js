import { createSlice } from '@reduxjs/toolkit'

import {makeRequest} from '../util'
import config from '../config'

const { actions, reducer } = createSlice({
  name: 'admin',
  initialState: {
    loading: false,
    sources: [],
    audioFiles: [],
  },
  reducers: {
    requestSources: (state, action) => ({
      loading: true,
      sources: [],
    }),
    responseSources: (state, action) => ({
      loading: false,
      sources: action.payload,
    }),
    requestRescan: (state, action) => ({
      loading: true,
      // sources: [],
    }),
    responseRescan: (state, action) => ({
      loading: false,
      // sources: action.payload,
    }),
    requestMetadataUpdate: (state, action) => ({
      loading: true,
      // sources: [],
    }),
    responseMetadataUpdate: (state, action) => ({
      loading: false,
      // sources: action.payload,
    }),
    requestAddSource: (state, action) => ({
      loading: true,
      // sources: [],
    }),
    responseAddSource: (state, action) => ({
      loading: false,
      // sources: action.payload,
    }),
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

export const getRescan = (id) => {
  return makeRequest(
    `${config.baseUrl}/admin/sources/${id}/scan`,
    actions.requestMetadataUpdate,
    actions.responseMetadataUpdate,
    'POST'
  )
}

export const getMetadataUpdate = (id) => {
  return makeRequest(
    `${config.baseUrl}/admin/sources/${id}/metadata`,
    actions.requestRescan,
    actions.responseRescan,
    'POST'
  )
}

export const addSource = (path) => {
  return makeRequest(
    `${config.baseUrl}/admin/sources`,
    actions.requestAddSource,
    actions.responseAddSource,
    'POST',
    { path: path }
  )
}

export const { requestSources, receiveSources } = actions
export default reducer
