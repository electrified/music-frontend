import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { Input } from 'semantic-ui-react'

import { searchTracks } from './redux/tracks'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log('before')
    this.setState({ value: event.target.value })
    console.log('after')
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(searchTracks(this.state.value))
    this.props.history.push('/songs')
    console.log('hello')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          icon={{ name: 'search', circular: true, link: true, onClick: this.handleSubmit }}
          placeholder='Search...'
          name="search"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

const mapStateToProps = (state, origProps) => {
  return {}
}

export default connect(mapStateToProps)(withRouter(Search))
