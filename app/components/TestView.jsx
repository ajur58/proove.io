import React from 'react'
import * as Redux from 'react-redux'

import * as testActions from '../actions/testActions'

class TestView extends React.Component {
  componentWillMount () {
    // load test
    const {dispatch} = this.props
    const testKey = this.props.match.params.testKey

    dispatch(testActions.getSingleTest(testKey))
  }
  render () {
    const {currentTest, isFetching} = this.props

    function showPeople (test) {
      if ('people' in test) {
        return (
          <div>
            <h3>{`Looking for ${test.people.amount} people for $${test.people.reward} each`}</h3>
            <br />
            <h3>{test.people.skills}</h3>
          </div>
        )
      }
    }

    if (isFetching) {
      return (
        <div className='step__pretty-high'>Loading</div>
      )
    } else {
      if (currentTest === null) {
        return (
          <div className='step__pretty-high'>
            <h2>Test not found</h2>
          </div>
        )
      }
      return (
        <div>
          <div className='row'>
            <h5 className='step__test-title'>{currentTest.title}</h5>
            <hr className='step__test-title-hr' />
            <h5>Created at</h5>
            <h3>{currentTest.createdAt}</h3>

            <h5>Platform</h5>
            <h3>{currentTest.platform}</h3>

            <h5>Hypotheses</h5>
            <h3>{currentTest.hypotheses}</h3>

            <h5>Scenarios</h5>
            <h3>{currentTest.scenarios}</h3>
            <hr />
            {showPeople(currentTest)}
          </div>
        </div>
      )
    }
  }
}

export default Redux.connect(
  (state) => state
)(TestView)
