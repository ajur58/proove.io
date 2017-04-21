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
    case 'DELETE_TEST':
      var newArray = state.filter((test) => {
        if (test.id !== action.testKey) {
          return test
        }
      })
      return newArray
    case 'LOGOUT':
      return []
    default:
      return state
  }
}

export var editTestReducer = (state = {}, action) => {
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
