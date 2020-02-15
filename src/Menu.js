import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
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
