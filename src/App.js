import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import AuthHandler from './AuthHandler'
import store from './redux'
import Home from './Home'

const config = {
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
}

const App = () => (
  <div>
    <AuthHandler />
    <Home />
  </div>
)

export default () => (
  <Provider store={store}>
    <Router>
      <Security {...config}>
        <Switch>
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <SecureRoute path="/" component={App} />
        </Switch>
      </Security>
    </Router>
  </Provider>
)
