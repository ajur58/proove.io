import React from 'react'
import * as Redux from 'react-redux'
import TestsListItem from 'TestsListItem'
import * as TestAPI from 'TestApi'

class TestsList extends React.Component {
  render () {
    var {tests, showCompleted, searchText} = this.props // works because of connect at EOF
    var renderTests = () => {
      var filteredTests = TestAPI.filterTests(tests, showCompleted, searchText)
      if (filteredTests.length === 0) {
        return (
          <p className='container__message'>No Tests To Show</p>
        )
      } else {
        return filteredTests.map((test) => {
          return (
            <TestsListItem key={test.id} {...test} />
          )
        })
      }
    }
    return (
      <div>
        <ul className='cards'>
          {renderTests()}
        </ul>
      </div>
    )
  }
}

export default Redux.connect(
  (state) => {
    return state // return all 3, searchText, showCompleted, todos
  }
)(TestsList)
