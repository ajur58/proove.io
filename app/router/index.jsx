import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'

import Main from 'Main'
import TestsApp from 'TestsApp'
import Login from 'Login'
import StepsApp from 'StepsApp'
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
      <Route path='/' component={Main}>
        <Route path='tests'>
          <IndexRoute component={TestsApp} onEnter={this.requireLogin} />
        </Route>
        <Route path='get-approoved' component={StepsApp} onEnter={this.requireLogin} >
          <IndexRoute component={StepOne} onEnter={this.requireLogin} />
          <Route path='test/:testKey' onEnter={this.requireLogin}>
            <IndexRoute component={StepOverview} onEnter={this.requireLogin} />
            <Route path='set-the-scene' component={StepOne} onEnter={this.requireLogin} />
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
