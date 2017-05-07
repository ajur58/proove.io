import React from 'react'
import {connect} from 'react-redux'

import StepOne from 'steps/StepOne'
import HelperBuddy from 'HelperBuddy'

import {startAddTest, clearCurrentTest} from 'actions/testActions'

// Parent component that handles NewTest
// Had to user render inline for Route as a workaround to pass onSubmit prop
class NewTest extends React.Component {
  componentWillMount () {
    // load test
    const {dispatch} = this.props
    dispatch(clearCurrentTest())
  }
  submitStep (values) {
    var {dispatch, history} = this.props
    dispatch(startAddTest(values, (testRefKey) => {
      history.push(`/get-approoved/${testRefKey}`)
    }))
  }
  render () {
    return (
      <div className='row flexbox-container'>
        <div className='columns small-11 medium-6 large-5'>
          <div className='row'>
            <StepOne onSubmit={this.submitStep.bind(this)} />
          </div>
        </div>
        <div className='columns hide-for-small-only medium-2 large-2' />
        <div className='columns hide-for-small-only medium-4 large-5 helper-buddy'>
          <div className='container'>
            <HelperBuddy />
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NewTest)
