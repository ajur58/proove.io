import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import PrivateInfo from 'PrivateInfo'
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
    replace('/private-page')
  }
  next()
}

export default (
  <Router history={hashHistory}>
    <Route path='/'>
      <Route path='private-page' component={PrivateInfo} onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={redirectIfLoggedin} />
    </Route>
  </Router>
)
