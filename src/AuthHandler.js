import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withOktaAuth } from '@okta/okta-react'

import { setAuth } from './redux/auth'

const AuthHandler = ({ authService, authState, setAuth, token }) => {
  React.useEffect(() => {
    authService.getIdToken().then((nextToken = null) => {
      if (nextToken !== token) {
        authService.getUser().then(user => {
          setAuth({ token: nextToken, user })
        })
      }
    })
  })

  React.useEffect(() => {
    if (window.location.pathname === '/login') authService.login('/')
    if (window.location.pathname === '/logout') authService.logout('/')
  }, [authService, window.location.pathname])

  return <div>Testing</div>
}

const mapStateToProps = state => ({
  token: state.auth.token,
  authUser: state.auth.user,
})

const mapDispatchToProps = { setAuth }

export default compose(
  withOktaAuth,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AuthHandler)
