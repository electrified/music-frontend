import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css'
import 'semantic-ui-css/semantic.css'
import logo from './logo.svg'
import Search from './Search'
import Admin from './Admin'
import MusicList from './MusicList'
import ArtistList from './ArtistList'
import ArtistPage from './ArtistPage'
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
          <Route path="/artists" component={ArtistList} />
          <Route path="/artist/:artistId/tracks" component={ArtistPage} />
        </Switch>
        <PlaybackControls />
      </div>
    </div>
  )
}
