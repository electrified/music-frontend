import React, { Component } from "react";
import { connect } from "react-redux";
import PlaybackControlButtons from "./PlaybackControlButtons"

class PlaybackControls extends Component {
    render() {
      return (
        <div className="PlaybackControls__container">
            <div className="PlaybackControls">
                <PlaybackControlButtons />
            </div>
        </div>)
    }
}


const mapStateToProps = (state, origProps) => {
    return {};
  };

export default connect(mapStateToProps)(PlaybackControls);