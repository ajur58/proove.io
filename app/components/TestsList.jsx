import React from 'react'
import {connect} from 'react-redux'
import {Card} from 'semantic-ui-react'

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
      <Card.Group>
        {renderTests()}
      </Card.Group>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    tests: state.tests,
    showCompleted: state.showCompleted,
    searchText: state.searchText
  }
}

export default connect(mapStateToProps)(TestsList)
