import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import * as authActions from 'actions/authActions'

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
                <Link to='/'> proove.io </Link>
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

function mapStateToProps (state, ownProps) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Nav)
