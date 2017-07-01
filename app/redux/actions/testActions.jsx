import {firebaseRef} from 'app/firebase/';
import moment from 'moment';
import action from 'helpers/actionCreator';

export const addTest = action('ADD_TEST');
export const addTests = action('ADD_TESTS');
export const updateTest = action('UPDATE_TEST');
export const clearCurrentTest = action('CLEAR_CURRENT_TEST');
export const deleteTest = action('DELETE_TEST');
export const markTestCompleted = action('MARK_TEST_COMPLETED');

export const toggleShowCompleted = action('TOGGLE_SHOW_COMPLETED');
export const isFetching = action('IS_FETCHING');
export const setSearchText = action('SET_SEARCH_TEXT');

export var startAddTest = (testCore, redirect) => {
  return (dispatch, getState) => {
    var uid = getState().auth.uid;
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
    };

    var testRef = firebaseRef.child(`tests/tuttich`).push(test);

    return testRef.then(() => {
      dispatch(addTest({
        ...test,
        id: testRef.key
      }));
      redirect(testRef.key);
    });
  };
};

// put callback on success and pass it back to the view
export var startUpdateTest = (testKey, test, redirect) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    test = {
      ...test,
      modifiedAt: moment().unix(),
      modifiedBy: uid
    };
    var testRef = firebaseRef.child(`tests/tuttich/${testKey}`).update(test);

    return testRef.then(() => {
      dispatch(updateTest(test));
      redirect(testKey);
    });
  };
};

// Delete & Add all tests to redux
export var startAddTests = () => {
  return (dispatch, getState) => {
    var testsRef = firebaseRef.child(`tests/tuttich`);

    return testsRef.once('value').then((snapshot) => {
      var tests = snapshot.val() || {};
      var parsedTests = [];

      Object.keys(tests).forEach((testKey) => {
        tests[testKey].status === 'active' && parsedTests.push({
          id: testKey,
          ...tests[testKey]
        });
      });
      dispatch(addTests(parsedTests));
    });
  };
};

// simple action that looks for a testkey in tests array,
// then sets the index of currentTest to this value
export var viewSingleTest = (testKey, tests) => {
  function hasKey (element) {
    return element.id === testKey;
  }

  const testIndex = tests.findIndex(hasKey);
  return {
    type: 'VIEW_TEST',
    testIndex
  };
};

export var getSingleTest = (testKey) => {
  return (dispatch, getState) => {
    // If tests are already in state, but out of sync with firebase
    // (eg. tests were added in the meantime)
    if (getState().tests.length > 0) {
      dispatch(viewSingleTest(testKey, getState().tests));
    }
  };
};

export var startDeleteTest = (testKey) => {
  if (testKey) {
    return (dispatch, getState) => {
      const updateValues = {
        status: 'deleted'
      };
      var testRef = firebaseRef.child(`tests/tuttich/${testKey}`).update(updateValues);
      return testRef.then(() => {
        dispatch(deleteTest(testKey));
      });
    };
  }
};

// put callback on success and pass it back to the view
export var startMarkTestCompleted = (testKey, completed) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const updateValues = {
      completed: completed,
      modifiedAt: moment().unix(),
      modifiedBy: uid
    };
    var testRef = firebaseRef.child(`tests/tuttich/${testKey}`).update(updateValues);

    return testRef.then(() => {
      dispatch(markTestCompleted(testKey));
    });
  };
};
