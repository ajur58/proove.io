export var testsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEST':
      return [
        ...state,
        action.test
      ]
    case 'ADD_TESTS':
      return [
        ...state,
        ...action.tests
      ]
    case 'EDIT_TEST':
      var editedArray = state.map((test) => {
        if (test.id === action.test.id) {
          return Object.assign(test, action.test)
        } else {
          return test
        }
      })
      return editedArray
    case 'DELETE_TEST':
      var newArray = state.filter((test) => test.id !== action.testKey)
      return newArray
    case 'LOGOUT':
      return []
    default:
      return state
  }
}

export var currentTestReducer = (state = {}, action) => {
  switch (action.type) {
    case 'VIEW_TEST':
      return action.test
    default:
      return state
  }
}

export var isFetchingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return action.isFetching
    default:
      return state
  }
}

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText
    default:
      return state
  }
}

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state
    default:
      return state
  }
}
