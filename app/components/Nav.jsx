import React from 'react'
import * as Redux from 'react-redux'
import {IndexLink} from 'react-router'

import * as authActions from '../actions/authActions'

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }
  onLogout (e) {
    var {dispatch} = this.props
    e.preventDefault()

    dispatch(authActions.startLogout())
  }
  render () {
    return (
      <div>
        <div className='top-bar'>
          <div className='top-bar-left'>
            <ul className='menu'>
              <li className='menu-text logo'>
                <IndexLink to='/' activeClassName='active'> proove.io </IndexLink>
              </li>
            </ul>
          </div>
          <div className='top-bar-right'>
            <ul className='menu'>
              <li>
                <img className='thumbnail' src={this.props.auth.photoURL} />
              </li>
              <li className='menu-text'>
                {this.props.auth.displayName}
              </li>
              <li className='menu-text'>
                <a href='#' onClick={this.onLogout}>Logout</a>
              </li>
            </ul>
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
)(Nav)
