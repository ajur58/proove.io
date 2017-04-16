export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      const {uid, displayName, email, photoURL, providerData} = action.user
      return {
        ...state,
        uid,
        displayName,
        email,
        photoURL,
        providerData,
        isLoggedIn: true
      }
    case 'RESTORE_USER':
      return {
        ...state,
        ...action.payload
      }
    case 'LOGOUT':
      return {
        isLoggedIn: false
      }
    default:
      return state
  }
}

export var redirectUrlReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_REDIRECT_URL':
      return action.redirectUrl
    default:
      return state
  }
}
