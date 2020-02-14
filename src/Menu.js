import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { withAuth } from '@okta/okta-react'

class Menu extends Component {
  render() {
    return (
      <div className="sideMenu">
        <ul>
          <li>
            <Link to="/songs">Songs</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default withAuth(Menu)
