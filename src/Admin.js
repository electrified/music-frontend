import React, { Component } from "react";

import SourceList from './SourceList'
import AudioFileList from './AudioFileList'

class Admin extends Component {
    render() {
        return (<div>
            <SourceList />
            <AudioFileList />
        </div>)
    }
}

export default Admin;
