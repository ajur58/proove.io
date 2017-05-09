import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import StepOne from 'steps/StepOne'
import StepTwo from 'steps/StepTwo'
import StepOverview from 'steps/StepOverview'
import HelperBuddy from 'HelperBuddy'

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
    // Had to user render inline for Route as a workaround to pass onSubmit prop
    const RoutedStep = (Step, path) => (
      <Route path={`${match.url}/${path}`} render={(props) => (
        <Step onSubmit={this.submitStep.bind(this)} {...props} />
      )} />
    )
    return (
      <div className='row flexbox-container'>
        <div className='columns small-11 medium-6 large-5'>
          <div className='row'>
            <Switch>
              {/* @TODO Create object with steps and iterate with foreach */}
              {RoutedStep(StepOne, 'basics')}
              {RoutedStep(StepTwo, 'people')}
              <Route exact path={`${match.url}`} component={StepOverview} />
              <Route component={NoMatch} />
            </Switch>
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