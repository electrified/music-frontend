import React, { Component } from "react";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Admin from "./Admin";
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
              <Link to="/admin">Admin</Link>
            </div>
            <Search />
          </div>
        </header>
        <div className="App-intro" />
        <div>
            <Switch>
              <Route exact path="/admin" component={Admin}/>
              <Route path="/songs" component={MusicList}/>
            </Switch>
        </div>
          <PlaybackControls />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
