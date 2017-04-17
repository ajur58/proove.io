import React from 'react'
import * as Redux from 'react-redux'
import {hashHistory} from 'react-router'

import Nav from 'Nav'

export class Main extends React.Component {
  componentDidUpdate () {
    if (this.props.auth.isLoggedIn !== true) {
      hashHistory.push('/')
    }
  }
  render () {
    return (
      <div>
        <Nav />
        <div className='row'>
          <div className='column small-centered medium-11 large-11'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect(
  (state) => {
    return {
      auth: state.auth
    }
  }
)(Main)
