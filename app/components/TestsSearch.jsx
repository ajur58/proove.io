import React from 'react'
import {connect} from 'react-redux'
import * as testActions from '../actions/testActions'

export class TestsSearch extends React.Component {
  render () {
    var {dispatch, showCompleted, searchText} = this.props
    return (
      <div className='container__header'>
        <div>
          <input type='search' ref='searchText' placeholder='Search by Title or Platform' value={searchText} onChange={() => {
            var searchText = this.refs.searchText.value
            dispatch(testActions.setSearchText(searchText))
          }} />
        </div>
        <div>
          <label>
            <input type='checkbox' ref='showCompleted' checked={showCompleted} onChange={() => {
              dispatch(testActions.toggleShowCompleted())
            }} />
            Show completed tests
          </label>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TestsSearch)
