import firebase, {firebaseRef, githubProvider} from 'app/firebase/'

export var login = (user) => {
  return {
    type: 'LOGIN',
    user
  }
}

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
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
