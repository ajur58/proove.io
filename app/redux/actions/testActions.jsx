import {firebaseRef} from 'app/firebase/'
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

export var startAddTest = (testCore, redirect) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid
    var test = {
      title: testCore['title'],
      platform: testCore['platform'],
      hypotheses: testCore['hypotheses'],
      scenarios: testCore['scenarios'],
      createdAt: moment().unix(),
      createdBy: uid,
      modifiedAt: 0,
      modifiedBy: '',
      completed: false,
      status: 'active'
    }

    var testRef = firebaseRef.child(`tests/tuttich`).push(test)

    return testRef.then(() => {
      dispatch(addTest({
        ...test,
        id: testRef.key
      }))
      redirect(testRef.key)
    })
  }
}

export var updateTest = (testKey, test) => {
  return {
    type: 'UPDATE_TEST',
    testKey,
    test
  }
}

// put callback on success and pass it back to the view
export var startUpdateTest = (testKey, test, redirect) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    test = {
      ...test,
      modifiedAt: moment().unix(),
      modifiedBy: uid
    }
    var testRef = firebaseRef.child(`tests/tuttich/${testKey}`).update(test)

    return testRef.then(() => {
      dispatch(updateTest(testKey, test))
      redirect(testKey)
    })
  }
}

// Delete & Add all tests to redux
export var startAddTests = () => {
  return (dispatch, getState) => {
    var testsRef = firebaseRef.child(`tests/tuttich`)

    return testsRef.once('value').then((snapshot) => {
      var tests = snapshot.val() || {}
      var parsedTests = []

      Object.keys(tests).forEach((testKey) => {
        parsedTests.push({
          id: testKey,
          ...tests[testKey]
        })
      })
      dispatch(addTests(parsedTests))
    })
  }
}

export var clearCurrentTest = () => {
  return {
    type: 'CLEAR_CURRENT_TEST'
  }
}

// simple action that looks for a testkey in tests array,
// then sets the index of currentTest to this value
export var viewSingleTest = (testKey, tests) => {
  function hasKey (element) {
    return element.id === testKey
  }

  const testIndex = tests.findIndex(hasKey)
  return {
    type: 'VIEW_TEST',
    testIndex
  }
}

export var getSingleTest = (testKey) => {
  return (dispatch, getState) => {
    // If tests are already in state, but out of sync with firebase
    // (eg. tests were added in the meantime)
    if (getState().tests.length > 0) {
      dispatch(viewSingleTest(testKey, getState().tests))
    }
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

export var isFetching = (isFetching) => {
  return {
    type: 'IS_FETCHING',
    isFetching
  }
}

export var deleteTest = (testKey = null) => {
  return {
    type: 'DELETE_TEST',
    testKey
  }
}
export var startDeleteTest = (id) => {
  if (id) {
    return (dispatch, getState) => {
      var testRef = firebaseRef.child(`tests/tuttich/${id}`).remove()
      return testRef.then(() => {
        dispatch(deleteTest(id))
      })
    }
  }
}
