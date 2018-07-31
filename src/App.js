import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import MusicList from "./MusicList";

class App extends Component {
  render() {
    return (
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
              <Search />
            </div>
          </div>
        </header>
        <div className="App-intro" />
        <div>
          <MusicList />
        </div>
      </div>
    );
  }
}

export default App;
