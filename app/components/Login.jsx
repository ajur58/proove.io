import React from 'react'
import * as Redux from 'react-redux'

import * as actions from 'actions'

export class Login extends React.Component {
  onLogin () {
    var {dispatch} = this.props
    dispatch(actions.startLogin())
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
              <button className='button' onClick={this.onLogin.bind(this)}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(Login)
