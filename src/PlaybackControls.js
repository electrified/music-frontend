import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

/*
Clicking play sets currently playing track in redux store, along with file url
function in here subscribes to it, sets the src url, and loads the file
*/

// const blob = new Blob([arrayBuffer], { type: "audio/wav" });
// const url = window.URL.createObjectURL(blob);
// audioElement.src = url;

class PlaybackControls extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="PlaybackControls__container">
        <div className="PlaybackControls">
          <div>
            <Button.Group>
              <Button icon="heart" />
              <Button icon="angle double left" />
              <Button icon="pause" />
              <Button icon="play" />
              <Button icon="angle double right" />
              <Button icon="repeat" />
            </Button.Group>
            <audio ref={this.myRef} controls src={this.props.currentTrackUrl} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ tracks }) => {
  return {
    currentTrackUrl: tracks.currentTrackUrl,
  }
}

export default connect(mapStateToProps)(PlaybackControls)
