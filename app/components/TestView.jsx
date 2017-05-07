import React from 'react'
import {connect} from 'react-redux'

import {getSingleTest} from 'actions/testActions'

class TestView extends React.Component {
  componentWillMount () {
    // load test
    const {dispatch} = this.props
    const testKey = this.props.match.params.testKey
    dispatch(getSingleTest(testKey))
  }
  componentDidUpdate () {
    // load test
    const {dispatch} = this.props
    const testKey = this.props.match.params.testKey
    dispatch(getSingleTest(testKey))
  }
  render () {
    const {currentTest, isFetching} = this.props
    const viewTest = this.props.tests[currentTest]

    function showPeople (test) {
      if ('people' in test) {
        return (
          <div>
            <h3>{`Looking for ${test.people.amount} people for ${test.people.reward} each`}</h3>
            <br />
            <h3>{test.people.skills}</h3>
          </div>
        )
      }
    }

    if (isFetching === true) {
      return (
        <div className='step__pretty-high'>Loading</div>
      )
    } else {
      if (currentTest.length === 0) {
        return (
          <div className='step__pretty-high'>
            <h2>Test not found</h2>
          </div>
        )
      }
      return (
        <div>
          <div className='row'>
            <h5 className='step__test-title'>{viewTest.title}</h5>
            <hr className='step__test-title-hr' />
            <h5>Created at</h5>
            <h3>{viewTest.createdAt}</h3>

            <h5>Platform</h5>
            <h3>{viewTest.platform}</h3>

            <h5>Hypotheses</h5>
            <h3>{viewTest.hypotheses}</h3>

            <h5>Scenarios</h5>
            <h3>{viewTest.scenarios}</h3>
            <hr />
            {showPeople(viewTest)}
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps (state, ownProps) {
  return {
    currentTest: state.currentTest,
    tests: state.tests,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(TestView)
