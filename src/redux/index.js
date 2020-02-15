import { configureStore } from '@reduxjs/toolkit'
import tracks from './tracks'
import admin from './admin'
import auth from './auth'

export default configureStore({
  reducer: {
    tracks,
    admin,
    auth,
  },
})
