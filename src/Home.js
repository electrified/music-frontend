import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { withAuth } from '@okta/okta-react'
import './App.css'
import logo from './logo.svg'
import Search from './Search'
import Admin from './Admin'
import MusicList from './MusicList'
import Menu from './Menu'
import PlaybackControls from './PlaybackControls'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { authenticated: false }
    this.checkAuthentication = this.checkAuthentication.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated()
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated })
    }
  }

  async componentDidMount() {
    await this.checkAuthentication()
  }

  async componentDidUpdate() {
    await this.checkAuthentication()
  }

  async login() {
    this.props.auth.login('/')
  }

  async logout() {
    this.props.auth.logout('/')
  }

  render() {
    const { authenticated } = this.state
    let body = null
    let header = null
    if (authenticated) {
      console.log(this.props.auth.getUser())
      header = (
        <div className="Buttons">
          <button onClick={this.logout}>Logout</button>
        </div>
      )
      body = (
        <div>
          <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route path="/songs" component={MusicList} />
          </Switch>
          <PlaybackControls />
        </div>
      )
    } else {
      header = (
        <div className="Buttons">
          <button onClick={this.login}>Login</button>
        </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Splodgify</h1>
          <Search auth={this.props.auth} />
          {header}
        </header>
        <Menu />
        {body}
      </div>
    )
  }
}

export default withAuth(Home)
