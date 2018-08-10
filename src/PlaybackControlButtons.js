import React, { Component } from "react";
import { connect } from "react-redux";

class PlaybackControlButtons extends Component {
    render() {
      return (
        <div>
            <button title="like-track" className="PlaybackControlButtons__button"> &#x1F499; </button>
            <button title="skip-previous" className="PlaybackControlButtons__button"> 	&#x23EE;   </button>
            <button title="pause" className="PlaybackControlButtons__button"> 	&#x23F8; </button>
            <button title="play" className="PlaybackControlButtons__button">  	&#x23EF; </button>
            <button title="skip-forwards" className="PlaybackControlButtons__button">&#x23ED; </button>
            <button title="repeat" className="PlaybackControlButtons__button"> &#x1F501; </button>
        </div>)
    }
}


const mapStateToProps = (state, origProps) => {
    return {};
  };

export default connect(mapStateToProps)(PlaybackControlButtons);