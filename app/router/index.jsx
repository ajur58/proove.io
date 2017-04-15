import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import firebase from 'app/firebase/'
import Main from 'Main'
import TestsApp from 'TestsApp'
import NewTest from 'NewTest'
import Login from 'Login'
import StepOne from 'StepOne'
import StepOverview from 'StepOverview'

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/')
  }
  next()
}

var redirectIfLoggedin = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/tests')
  }
  next()
}

export default (
  <Router history={hashHistory}>
    <Route path='/'>
      <Route path='tests' component={Main} onEnter={requireLogin}>
        <IndexRoute component={TestsApp} onEnter={requireLogin} />
        <Route path='new' component={NewTest} onEnter={requireLogin}>
          <Route path='steps' onEnter={requireLogin}>
            <Route path='1' component={StepOne} onEnter={requireLogin} />
          </Route>
          <IndexRoute component={StepOverview} onEnter={requireLogin} />
        </Route>
      </Route>
      <IndexRoute component={Login} onEnter={redirectIfLoggedin} />
    </Route>
  </Router>
)
