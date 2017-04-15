export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

export var testsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.test
      ]
    default:
      return state
  }
}
