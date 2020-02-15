import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSource } from './redux/admin'

class AddSource extends Component {
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
    this.props.dispatch(addSource(this.state.value))
    console.log('hello')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="search"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Add Source</button>
      </form>
    )
  }
}

const mapStateToProps = (state, origProps) => {
  return {}
}

export default connect(mapStateToProps)(AddSource)
