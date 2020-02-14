import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Security, ImplicitCallback } from '@okta/okta-react'

import Home from './Home'

const config = {
  issuer: 'https://dev-181381.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oafqdryvHj2PBv09356',
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Security {...config}>
          <Route path="/" component={Home} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </Security>
      </BrowserRouter>
    )
  }
}

export default App
