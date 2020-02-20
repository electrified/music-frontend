import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'

// const blob = new Blob([arrayBuffer], { type: "audio/wav" });
// const url = window.URL.createObjectURL(blob);
// audioElement.src = url;

// window.URL.revokeObjectURL(url);

class PlaybackControlButtons extends Component {
  render() {
    return (
      <div>
        <Button.Group>
          <Button icon="heart" />
          <Button icon="angle double left" />
          <Button icon="pause" />
          <Button icon="play" />
          <Button icon="angle double right" />
          <Button icon="repeat" />
        </Button.Group>
        <audio id="cheese"></audio>
      </div>
    )
  }
}

const mapStateToProps = (state, origProps) => {
  return {}
}

export default connect(mapStateToProps)(PlaybackControlButtons)
