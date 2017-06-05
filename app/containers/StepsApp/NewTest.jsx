import React from 'react'
import {connect} from 'react-redux'

import StepOne from 'steps/StepOne'
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
      <StepOne onSubmit={this.submitStep.bind(this)} />
    )
  }
}

export default connect()(NewTest)
