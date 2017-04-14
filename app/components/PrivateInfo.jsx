import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'

class PrivateInfo extends React.Component {
  constructor (props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }
  onLogout (e) {
    var {dispatch} = this.props
    e.preventDefault()

    dispatch(actions.startLogout())
  }
  render () {
    return (
      <div>
        <div className='page-actions'>
          <a href='#' onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className='page-title'>React Firebase Boilerplate</h1>

        <div className='row'>
          <div className='column small-centered small-11 medium-6 large-5'>
            <div className='container'>
              <p className='alert label'>Members only</p>
              <h3 className='alert'>This page is only visible to logged-in users</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(PrivateInfo)
