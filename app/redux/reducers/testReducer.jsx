export var testsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TEST':
      return [
        ...state,
        action.payload
      ];
    case 'ADD_TESTS':
      return [
        ...action.payload
      ];
    case 'UPDATE_TEST':
      var editedArray = state.map((test) => {
        if (test.id === action.payload.id) {
          return Object.assign(test, action.payload);
        } else {
          return test;
        }
      });
      return editedArray;
    case 'DELETE_TEST':
      return state.filter((test) => test.id !== action.payload);
    case 'MARK_TEST_COMPLETED':
      var editedState = state.map((test) => {
        if (test.id === action.payload) {
          test.completed = !test.completed;
        }
        return test;
      });
      return editedState;
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

export var currentTestReducer = (state = '', action) => {
  switch (action.type) {
    case 'VIEW_TEST':
      return action.testIndex;
    case 'CLEAR_CURRENT_TEST':
      return '';
    default:
      return state;
  }
};

export var isFetchingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return action.payload;
    default:
      return state;
  }
};

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.payload;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};
