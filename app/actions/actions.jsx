import firebase, {firebaseRef, githubProvider} from 'app/firebase/'
import moment from 'moment'

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

export var addTest = (test) => {
  return {
    type: 'ADD_TEST',
    test
  }
}

export var startAddTest = (title, platform) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid
    var test = {
      access: {
      },
      core: {
        title: title,
        platform: platform,
        createdAt: moment().unix(),
        modifiedAt: null,
        status: 'new'
      }
    }
    test['access'][uid] = 'owner'

    var testRef = firebaseRef.child(`tests`).push(test)

    return testRef.then(() => {
      dispatch(addTest({
        ...test,
        id: testRef.key
      }))
    })
  }
}
