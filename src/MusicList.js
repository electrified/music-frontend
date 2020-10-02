import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Menu, Table, Button } from 'semantic-ui-react'

import { play } from './redux/tracks'

class MusicList extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(id, event) {
    event.preventDefault()
    console.log('hello')
    this.props.dispatch(play(id))
  }

  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Artist</Table.HeaderCell>
              <Table.HeaderCell>Album</Table.HeaderCell>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell>Comment</Table.HeaderCell>
              <Table.HeaderCell>Track</Table.HeaderCell>
              <Table.HeaderCell>Length</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.tracks &&
              this.props.tracks.map((track, i) => (
                <Table.Row key={i}>
                  <Table.Cell>
                    {' '}
                    <Button
                      circular
                      icon="play"
                      onClick={e => this.handleSubmit(track.id, e)}
                    />
                    {track.name}
                  </Table.Cell>
                  <Table.Cell>{track.artist.length && track.artist[0].name}</Table.Cell>
                  <Table.Cell>{track.release.length && track.release[0].name}</Table.Cell>
                  <Table.Cell>{track.year}</Table.Cell>
                  <Table.Cell>{track.comment}</Table.Cell>
                  <Table.Cell>{track.track}</Table.Cell>
                  <Table.Cell>{track.length}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
          <Table.Footer>
            {/* <Table.Row>
              <Table.HeaderCell colSpan="7">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row> */}
          </Table.Footer>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = ({ tracks }) => {
  return {
    tracks: tracks.themusic,
  }
}

export default connect(mapStateToProps)(MusicList)
