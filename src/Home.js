import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Menu, Container, Image, Grid, Segment } from 'semantic-ui-react'
import './App.css'
import 'semantic-ui-css/semantic.css'
import logo from './logo.svg'
import Search from './Search'
import Admin from './Admin'
import MusicList from './MusicList'
import ArtistList from './ArtistList'
import ArtistPage from './ArtistPage'
import Sidebar from './Sidebar'
import PlaybackControls from './PlaybackControls'

export default () => {
  return (
    <div>
      <Container>
        <Menu fixed='top' inverted>
            <Menu.Item as='a' header>
              <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
              Splodgify
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item position='right'><Search /></Menu.Item>
            <Menu.Item position='right'><Link to="/logout">Logout</Link></Menu.Item>
        </Menu>
      </Container>
      <Container style={{ marginTop: '7em' }}>
        <Grid container columns={2}>
          <Grid.Column floated={'left'} width={4}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={12}>
            <Switch>
              <Route exact path="/admin" component={Admin} />
              <Route path="/songs" component={MusicList} />
              <Route path="/artists" component={ArtistList} />
              <Route path="/artist/:artistId/tracks" component={ArtistPage} />
            </Switch>
          </Grid.Column>
        </Grid>
        <Container>
          <PlaybackControls />
        </Container>
      </Container>
    </div>
  )
}
