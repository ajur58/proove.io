import React from 'react'
import {connect} from 'react-redux'

import {startLogin} from 'actions/authActions'

export class Login extends React.Component {
  componentDidUpdate () {
    if (this.props.isLoggedIn === true) {
      const {history} = this.props
      history.push('/')
    }
  }
  onGHLogin () {
    var {dispatch} = this.props
    dispatch(startLogin('github'))
  }
  onFBLogin () {
    var {dispatch} = this.props
    dispatch(startLogin('facebook'))
  }
  render () { // ES6 shortcut
    return (
      <div>
        <h1 className='page-title'>proove.io</h1>

        <div className='row'>
          <div className='columns small-centered small-10 medium-6 large-4'>
            <div className='callout callout-auth'>
              <h3>Login</h3>
              <p>
                Create an account for free.
              </p>
              <div>
                <button className='button' onClick={this.onFBLogin.bind(this)}>Login with Facebook</button>
              </div>
              <div>
                <button className='button' onClick={this.onGHLogin.bind(this)}>Login with GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Login)
