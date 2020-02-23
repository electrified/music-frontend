import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

import { getArtists } from './redux/tracks'

class ArtistList extends Component {
  componentDidMount() {
    this.props.dispatch(getArtists())
  }

  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Track count</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.artists.map((artist, i) => (
              <Table.Row key={i}>
                <Table.Cell>{artist.artist.name}</Table.Cell>
                <Table.Cell>
                  {' '}
                  <Link to={`/artist/${artist.artist.id}/tracks`}>
                    {artist.trackCount}
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = ({ tracks }) => {
  return {
    artists: tracks.artists,
  }
}

export default connect(mapStateToProps)(ArtistList)
