import firebase, {firebaseRef, facebookProvider, githubProvider} from 'app/firebase/'
import moment from 'moment'

export var addTest = (test) => {
  return {
    type: 'ADD_TEST',
    test
  }
}

// Same as previous one, but reducer is different
export var addTests = (tests) => {
  return {
    type: 'ADD_TESTS',
    tests
  }
}

export var startAddTest = (title, platform) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid
    var test = {
      core: {
        title: title,
        platform: platform,
        createdAt: moment().unix(),
        createdBy: uid,
        modifiedAt: null,
        status: 'new'
      }
    }

    var testRef = firebaseRef.child(`tests/tuttich`).push(test)

    return testRef.then(() => {
      dispatch(addTest({
        ...test,
        id: testRef.key
      }))
    })
  }
}

// update on Firebase changes version
export var startAddTests = () => {
  return (dispatch, getState) => {
    var testsRef = firebaseRef.child(`tests/tuttich`)

    return testsRef.once('value').then((snapshot) => {
      var tests = snapshot.val() || {}
      var parsedTests = []

      Object.keys(tests).forEach((testId) => {
        parsedTests.push({
          id: testId,
          ...tests[testId]
        })
      })
      dispatch(addTests(parsedTests))
    })
  }
}

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
}

// toggleShowCompleted TOGGLE_SHOW_COMPLETED
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}