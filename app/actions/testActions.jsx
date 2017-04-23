import firebase, {firebaseRef} from 'app/firebase/'
import moment from 'moment'
import {hashHistory} from 'react-router'

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

export var startAddTest = (testCore) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid
    var test = {
      title: testCore['title'],
      platform: testCore['title'],
      hypotheses: testCore['hypotheses'],
      scenarios: testCore['scenarios'],
      createdAt: moment().unix(),
      createdBy: uid,
      modifiedAt: 0,
      modifiedBy: '',
      completed: false,
      stepActive: 2,
      stepScreen: 1
    }

    var testRef = firebaseRef.child(`tests/tuttich`).push(test)

    return testRef.then(() => {
      dispatch(addTest({
        ...test,
        id: testRef.key
      }))
      hashHistory.push(`/get-approoved/test/${testRef.key}`)
    })
  }
}

export var editTest = (test) => {
  return {
    type: 'EDIT_TEST',
    test
  }
}

export var startEditTest = (test, step) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const testKey = test['id']

    // set step active
    test = {
      ...test,
      stepActive: ++step,
      modifiedAt: moment().unix(),
      modifiedBy: uid
    }
    var testRef = firebaseRef.child(`tests/tuttich/${testKey}`).update(test)

    return testRef.then(() => {
      dispatch(editTest(test))
      hashHistory.push(`/get-approoved/test/${testKey}`)
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

export var viewSingleTest = (test) => {
  return {
    type: 'VIEW_TEST',
    test
  }
}

export var getSingleTest = (testKey) => {
  return (dispatch, getState) => {
    // this always fetches from server
    // @TODO maybe optimise to fetch from local storage, if available?

    dispatch(isFetching(true))
    var testsRef = firebaseRef.child(`tests/tuttich/${testKey}`)

    return testsRef.once('value').then((snapshot) => {
      var editingTest = snapshot.val() || null
      if (editingTest !== null) {
        // add the ID to the object too
        editingTest['id'] = testKey
      }
      dispatch(viewSingleTest(editingTest))
      dispatch(isFetching(false))
    }, (error) => {
      console.log(error)
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

export var isFetching = (isFetching) => {
  return {
    type: 'IS_FETCHING',
    isFetching
  }
}

export var deleteTest = (testKey) => {
  return {
    type: 'DELETE_TEST',
    testKey
  }
}
export var startDeleteTest = (id) => {
  return (dispatch, getState) => {
    var testRef = firebaseRef.child(`tests/tuttich/${id}`).remove()
    return testRef.then(() => {
      dispatch(deleteTest(id))
    })
  }
}
