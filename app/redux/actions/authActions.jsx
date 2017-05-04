import firebase, {firebaseRef, facebookProvider, githubProvider} from 'app/firebase/'
import moment from 'moment'

export var login = (user) => {
  return {
    type: 'LOGIN',
    user
  }
}

export var startLogin = (provider) => {
  return (dispatch, getState) => {
    var useProvider = githubProvider
    if (provider === 'facebook') {
      useProvider = facebookProvider
    }
    return firebase.auth().signInWithPopup(useProvider).then((result) => {
      console.log('Auth worked', result)
    }, (error) => {
      console.log('Unable to auth', error)
    })
  }
}

export var logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out')
    })
  }
}

// Sets the redirect url if login expired
export var setRedirectUrl = (redirectUrl) => {
  return {
    type: 'SET_REDIRECT_URL',
    redirectUrl
  }
}

export const load = (payload) => {
  return {
    type: 'RESTORE_USER',
    payload
  }
}
