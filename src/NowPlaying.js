import React, { Component } from "react";
import { connect } from "react-redux";

class NowPlaying extends Component {
    render() {
      return (
        <div>
            
        </div>)
    }
}


const mapStateToProps = (state, origProps) => {
    return {};
  };

export default connect(mapStateToProps)(NowPlaying);