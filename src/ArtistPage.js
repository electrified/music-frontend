import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getTracksByArtist } from './redux/tracks'
import MusicList from './MusicList'

export default () => {
  const { artistId } = useParams()
  const dispatch = useDispatch()
  dispatch(getTracksByArtist(artistId))

  return (
    <div>
      <MusicList />
    </div>
  )
}
