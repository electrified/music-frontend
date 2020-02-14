import React, { Component } from 'react'
import { connect } from 'react-redux'

class AudioFileList extends Component {
  render() {
    return (
      <div>
        {this.props.tracks.map((track, i) => (
          <div key={i} className={'MusicList__trackRow'}>
            <div>{track.title}</div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ tracks }) => {
  return {
    tracks: tracks.themusic,
  }
}

export default connect(mapStateToProps)(AudioFileList)
