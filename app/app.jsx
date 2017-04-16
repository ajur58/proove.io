var React = require('react')
var ReactDOM = require('react-dom')
var {hashHistory} = require('react-router')

var authActions = require('actions/authActions')
var testActions = require('actions/testActions')
var store = require('configureStore').configure()

import firebase from 'app/firebase/'
// import router from 'app/router/'

import Root from 'app/containers/Root'

// Now that redux and react-router have been configured, we can render the
// React application to the DOM!
store.dispatch({ type: 'INIT_RESTORE_USER' })

export const auth = firebase.auth() // the firebase auth namespace

auth.onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(authActions.login(user))
    // Fill up redux store with tests
    store.dispatch(testActions.startAddTests())
  } else {
    store.dispatch(authActions.logout())
    localStorage.removeItem('PROOVE_STATE')
  }
})

$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

// const routes = require('./router/new').default(store)

// React render proper
ReactDOM.render(
  <Root history={hashHistory} store={store} />,
  document.getElementById('app')
  )
