import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: {
    loading: true,
    user: null,
    token: undefined,
  },
  reducers: {
    setAuth: (state, { payload }) => {
      console.log("setauth")
      state.loading = false
      state.token = payload.token
      state.user = payload.user
    },
  },
})

export const { setAuth } = actions

export default reducer
