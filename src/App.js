import React, { Component } from "react";
import {BrowserRouter, Link} from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import MusicList from "./MusicList";
import PlaybackControls from "./PlaybackControls"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header-container">
          <div className="App-header">
            <div>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
              <h1 className="App-title">Splodgify</h1>
            </div>
            <div>
              <Link to="/songs">Songs</Link>
              Albums
              Artists
            </div>
            <div>
              <Search />
            </div>
          </div>
        </header>
        <div className="App-intro" />
        <div>
          <MusicList />
        </div>
          <PlaybackControls />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
