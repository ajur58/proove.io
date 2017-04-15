import * as redux from 'redux'
import thunk from 'redux-thunk'

import {searchTextReducer, showCompletedReducer, testsReducer} from '../reducers/testReducer'
import {authReducer} from '../reducers/authReducer'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: authReducer,
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
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
