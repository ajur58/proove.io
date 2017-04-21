import * as redux from 'redux'
import thunk from 'redux-thunk'

import { saveCurrentState } from '../redux/middleware/saveCurrentState'
import { loadCurrentState } from '../redux/middleware/loadCurrentState'

import {searchTextReducer, showCompletedReducer, testsReducer, editTestReducer, isFetchingReducer} from '../reducers/testReducer'
import {authReducer, redirectUrlReducer} from '../reducers/authReducer'

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: authReducer,
    redirectUrl: redirectUrlReducer,
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    tests: testsReducer,
    isFetching: isFetchingReducer,
    editTest: editTestReducer
  })

  const store = redux.createStore(reducer, initialState, redux.compose(
    // thunk to handle actions that return functions
    redux.applyMiddleware(thunk, loadCurrentState, saveCurrentState),
    // for Redux debugging in Browser
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ))

  return store
}
