var React = require('react')
var ReactDOM = require('react-dom')
import {whyDidYouUpdate} from 'why-did-you-update'

// Styles
import 'styles/app.scss'
import 'semantic-ui-css/semantic.css'

var authActions = require('actions/authActions')
var testActions = require('actions/testActions')
var store = require('configureStore').configure()

import firebase from 'app/firebase/'

import Root from 'app/containers/Root'

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

if (process.env.NODE_ENV === 'development') {
  whyDidYouUpdate(React)
}

// React render proper
ReactDOM.render(
  <Root store={store} />
  ,
  document.getElementById('app')
  )
