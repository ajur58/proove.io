import * as redux from 'redux'
import thunk from 'redux-thunk'

import {authReducer, testsReducer} from 'reducers'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: authReducer,
    tests: testsReducer
  })

  var store = redux.createStore(reducer, initialState, redux.compose(
    // thunk to handle actions that return functions
    redux.applyMiddleware(thunk),
    // for Redux debugging in Browser
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ))

  return store
}
