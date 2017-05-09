import React from 'react'
import {connect} from 'react-redux'
import { Image, Menu } from 'semantic-ui-react'
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
      <Menu secondary>
        <Menu.Item as={Link} to='/' name='proove' />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Image src={this.props.auth.photoURL} avatar />
            <span>{this.props.auth.displayName}</span>
          </Menu.Item>
          <Menu.Item name='logout' onClick={this.onLogout} />
        </Menu.Menu>
      </Menu>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Nav)
