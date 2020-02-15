import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'
import logo from './logo.svg'
import Search from './Search'
import Admin from './Admin'
import MusicList from './MusicList'
import Menu from './Menu'
import PlaybackControls from './PlaybackControls'

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Splodgify</h1>
        <Search />
        <div className="Buttons">
          <Link to="/logout">Logout</Link>
        </div>
      </header>
      <Menu />
      <div>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route path="/songs" component={MusicList} />
        </Switch>
        <PlaybackControls />
      </div>
    </div>
  )
}
