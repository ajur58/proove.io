import * as redux from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import { saveCurrentState } from './middleware/saveCurrentState'
import { loadCurrentState } from './middleware/loadCurrentState'

import {searchTextReducer, showCompletedReducer, testsReducer, currentTestReducer, isFetchingReducer} from 'reducers/testReducer'
import {authReducer, redirectUrlReducer} from 'reducers/authReducer'

export let configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: authReducer,
    currentTest: currentTestReducer,
    form: formReducer,
    isFetching: isFetchingReducer,
    redirectUrl: redirectUrlReducer,
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    tests: testsReducer
  })

  return redux.createStore(reducer, initialState, redux.compose(
    // thunk to handle actions that return functions
    redux.applyMiddleware(thunk, loadCurrentState, saveCurrentState),
    // for Redux debugging in Browser
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ))
}
