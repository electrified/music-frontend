import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container, Image } from 'semantic-ui-react'

export default () => {
  return (
    <div className="sideMenu">
      <Menu vertical>
        <Menu.Item>
          <Link to="/songs">Songs</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/albums">Albums</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/artists">Artists</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/admin">Admin</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}
