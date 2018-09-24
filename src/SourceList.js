import React, { Component } from "react";
import { connect } from "react-redux";
import { getSources, rescanSource, updateMetadata } from "./actions/admin";

class SourceList extends Component {
    componentDidMount() {
        this.props.dispatch(getSources());
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(rescanSource(this.state.value));
        console.log("hello");
    }

    render() {
        return (
        <div>
            {this.props.sources.map((source, i) => (
            <div key={i} className={"SourceList__sourceRow"}>
                <div>{source.id}</div>
                <div>{source.path}</div>
                <button title="like-track" className="PlaybackControlButtons__button"> Scan for changes</button>
                <button title="skip-previous" className="PlaybackControlButtons__button">Load metadata</button>
            </div>
            ))}
        </div>
        );
    }
}

const mapStateToProps = (state, origProps) => {
  return {sources: state.admin.sources};
};

export default connect(mapStateToProps)(SourceList);
