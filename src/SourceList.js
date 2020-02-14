import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withAuth } from '@okta/okta-react'
import { getSources, getRescan, getMetadataUpdate } from './actions/admin'
import AddSource from './AddSource'
class SourceList extends Component {
  constructor(props) {
    super(props)

    this.handleRescan = this.handleRescan.bind(this)
    this.handleLoadMetadata = this.handleLoadMetadata.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(getSources(this.props.auth))
  }

  handleRescan(id, event) {
    event.preventDefault()
    this.props.dispatch(getRescan(id, this.props.auth))
  }

  handleLoadMetadata(id, event) {
    event.preventDefault()
    this.props.dispatch(getMetadataUpdate(id, this.props.auth))
  }

  handleDelete(id, event) {
    event.preventDefault()
    this.props.dispatch(getMetadataUpdate(id, this.props.auth))
  }

  render() {
    return (
      <div>
        <AddSource auth={this.props.auth} />

        {this.props.sources.map((source, i) => (
          <div key={i} className={'SourceList__sourceRow'}>
            <div>{source.id}</div>
            <div>{source.path}</div>
            <button onClick={e => this.handleRescan(source.id, e)}>
              Scan for changes
            </button>
            <button onClick={e => this.handleLoadMetadata(source.id, e)}>
              Load metadata
            </button>
            <button onClick={e => this.handleDelete(source.id, e)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state, origProps) => {
  return { sources: state.admin.sources }
}

export default withAuth(connect(mapStateToProps)(SourceList))
