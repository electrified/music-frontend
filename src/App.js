import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react'

import config from './config'
import AuthHandler from './AuthHandler'
import store from './redux'
import Home from './Home'

const App = () => (
  <div>
    <AuthHandler />
    <Home />
  </div>
)

export default () => (
  <Provider store={store}>
    <Router>
      <Security {...config.oidc}>
        <Switch>
          <Route path="/implicit/callback" component={LoginCallback} />
          <SecureRoute path="/" component={App} />
        </Switch>
      </Security>
    </Router>
  </Provider>
)
