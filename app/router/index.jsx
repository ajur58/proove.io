import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'

import Main from 'Main'
import TestsApp from 'TestsApp'
import Login from 'Login'
import StepsApp from 'StepsApp'
import StepOne from 'StepOne'
import StepTwo from 'StepTwo'
import StepOverview from 'StepOverview'
import TestView from 'TestView'

export default class SmartRouter extends React.Component {

  constructor () {
    super()

    this.requireLogin = this.requireLogin.bind(this)
    this.redirectIfLoggedin = this.redirectIfLoggedin.bind(this)
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
        <Route path='/'>
          <Route component={Main}>
            <Route path='tests'component={TestsApp} onEnter={this.requireLogin} />
            <Route path='get-approoved' component={StepsApp} onEnter={this.requireLogin} >
              <IndexRoute component={StepOne} onEnter={this.requireLogin} />
              <Route path='test/:testKey' onEnter={this.requireLogin}>
                <IndexRoute component={StepOverview} onEnter={this.requireLogin} />
                <Route path='basics' component={StepOne} onEnter={this.requireLogin} />
                <Route path='people' component={StepTwo} onEnter={this.requireLogin} />
              </Route>
            </Route>
            <Route path='test/:testKey' component={TestView} onEnter={this.requireLogin} />
          </Route>
          <IndexRoute component={Login} onEnter={this.redirectIfLoggedin} />
        </Route>
      </Router>
    )
  }
}
