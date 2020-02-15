import React from 'react'
import { useSelector} from 'react-redux'

export default () => {
  const tracks = useSelector(state => state.tracks.themusic)

  return (<div>
      {tracks.map((track, i) => (
        <div key={i} className={'MusicList__trackRow'}>
          <div>{track.title}</div>
        </div>
      ))}
    </div>)
}
