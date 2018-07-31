import React, { Component } from "react";
import { connect } from "react-redux";

class MusicList extends Component {
  render() {
    return (
      <div>
        {this.props.tracks.map((track, i) => (
          <div key={i}>
            <div>{track.title}</div>
            <div>{track.release[0].name}</div>
            <div>{track.year}</div>
            <div>{track.comment}</div>
            <div>{track.track}</div>
            <div>{track.length}</div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ tracks }) => {
  return {
    tracks: tracks.themusic
  };
};

export default connect(mapStateToProps)(MusicList);
