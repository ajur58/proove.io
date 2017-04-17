import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'

import Main from 'Main'
import TestsApp from 'TestsApp'
import NewTest from 'NewTest'
import Login from 'Login'
import StepOne from 'StepOne'
import StepOverview from 'StepOverview'

export default class SmartRouter extends React.Component {

  constructor () {
    super()

    this.requireLogin = this.requireLogin.bind(this)
    this.redirectIfLoggedin = this.redirectIfLoggedin.bind(this)
    // Configure routes here as this solves a problem with hot loading where
    // the routes are recreated each time.
    this.routes = (
      <Route path='/'>
        <Route path='tests' component={Main}>
          <IndexRoute component={TestsApp} onEnter={this.requireLogin} />
          <Route path='new' component={NewTest} onEnter={this.requireLogin} >
            <Route path='steps'>
              <Route path='1' component={StepOne} onEnter={this.requireLogin} />
            </Route>
            <IndexRoute component={StepOverview} onEnter={this.requireLogin} />
          </Route>
        </Route>
        <IndexRoute component={Login} onEnter={this.redirectIfLoggedin} />
      </Route>
    )
  }

  requireLogin (nextState, replace) {
    const { getState } = this.props
    if (getState().auth.isLoggedIn !== true) {
      replace('/')
    }
  }

  redirectIfLoggedin (nextState, replace, next) {
    const { getState } = this.props
    if (getState().auth.isLoggedIn === true) {
      replace('/tests')
    }
    next()
  }

  render () {
    const {history} = this.props
    return (
      <Router history={history}>
        { this.routes }
      </Router>
    )
  }
}
