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
    case 'LOGOUT':
      return []
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
