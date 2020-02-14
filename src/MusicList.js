import React, { Component } from 'react'
import { connect } from 'react-redux'
import { playNow } from './actions/playback'

class MusicList extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log('before')
    this.setState({ value: event.target.value })
    console.log('after')
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(playNow(this.state.value))
    console.log('hello')
  }

  render() {
    return (
      <div>
        {this.props.tracks.map((track, i) => (
          <div key={i} className={'MusicList__trackRow'}>
            <div>{track.title}</div>
            <div>{track.artist[0].name}</div>
            <div>{track.release[0].name}</div>
            <div>{track.year}</div>
            <div>{track.comment}</div>
            <div>{track.track}</div>
            <div>{track.length}</div>
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

export default connect(mapStateToProps)(MusicList)
