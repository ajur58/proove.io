import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import StepOne from 'steps/StepOne'
import StepTwo from 'steps/StepTwo'
import StepOverview from 'steps/StepOverview'

import './steps_app.scss'

import {startUpdateTest, getSingleTest, clearCurrentTest} from 'actions/testActions'

class StepsApp extends React.Component {
  componentWillMount () {
    // load test
    const {dispatch} = this.props
    const testKey = this.props.match.params.testKey
    testKey ? dispatch(getSingleTest(testKey)) : dispatch(clearCurrentTest())
  }
  componentDidUpdate () {
    // look again after update, important on hard refresh as tests state lags
    const {dispatch} = this.props
    const testKey = this.props.match.params.testKey
    testKey ? dispatch(getSingleTest(testKey)) : dispatch(clearCurrentTest())
  }
  submitStep (values) {
    var {currentTest, dispatch, history} = this.props
    const testKey = this.props.match.params.testKey

    if (values.stepActive && values.stepActive >= this.props.tests[currentTest]) {
      values.stepActive++
    } else {
      delete values.stepActive
    }

    dispatch(startUpdateTest(testKey, values, (testRefKey) => {
      history.push(`/get-approoved/${testRefKey}`)
    }))
  }
  render () {
    const {match} = this.props
    // Parent component that handles StepsApp
    // Had to use render inline for Route as a workaround to pass onSubmit prop
    const RoutedStep = (Step, path) => (
      <Route path={`${match.url}/${path}`} render={(props) => (
        <Step onSubmit={this.submitStep.bind(this)} {...props} />
      )} />
    )
    return (
      <Switch>
        {/* @TODO Create object with steps and iterate with foreach */}
        {RoutedStep(StepOne, 'basics')}
        {RoutedStep(StepTwo, 'people')}
        <Route exact path={`${match.url}`} component={StepOverview} />
        <Route component={NoMatch} />
      </Switch>
    )
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found <code>{location.pathname}</code></h3>
  </div>
)

function mapStateToProps (state, ownProps) {
  return {
    tests: state.tests
  }
}

export default connect(mapStateToProps)(StepsApp)
