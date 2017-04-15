var React = require('react')
var ReactDOM = require('react-dom')
var {Provider} = require('react-redux')
var {hashHistory} = require('react-router')

var authActions = require('actions/authActions')
var testActions = require('actions/testActions')
var store = require('configureStore').configure()

import firebase from 'app/firebase/'
import router from 'app/router/'

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(authActions.login(user))
    store.dispatch(testActions.startAddTests())
    hashHistory.push('/tests')
  } else {
    store.dispatch(authActions.logout())
    hashHistory.push('/')
  }
})

$(document).foundation()

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
)
