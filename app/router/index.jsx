import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from 'Main'
import TestsList from 'TestsList'
import TestCreate from 'TestCreate'
import Login from 'Login'
import firebase from 'app/firebase/'

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
        <IndexRoute component={TestsList} onEnter={requireLogin} />
        <Route path='new' component={TestCreate} onEnter={requireLogin} />
      </Route>
      <IndexRoute component={Login} onEnter={redirectIfLoggedin} />
    </Route>
  </Router>
)
