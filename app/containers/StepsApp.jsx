import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import StepOne from 'StepOne'
import StepTwo from 'StepTwo'
import StepOverview from 'StepOverview'
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
    var {dispatch, history} = this.props
    const testKey = this.props.match.params.testKey

    values = {
      ...values,
      stepActive: 2
    }
    dispatch(startUpdateTest(testKey, values, (testRefKey) => {
      history.push(`/get-approoved/${testRefKey}`)
    }))
  }
  render () {
    const {match} = this.props
    return (
      <div className='row flexbox-container'>
        <div className='columns small-11 medium-6 large-5'>
          <div className='row'>
            <Switch>
              {/* Parent component that handles StepsApp
               Had to user render inline for Route as a workaround to pass onSubmit prop */}
              <Route path={`${match.url}/basics`} render={(props) => (
                <StepOne onSubmit={this.submitStep.bind(this)} {...props} />
              )} />
              <Route path={`${match.url}/people`} render={(props) => (
                <StepTwo onSubmit={this.submitStep.bind(this)} {...props} />
              )} />
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
