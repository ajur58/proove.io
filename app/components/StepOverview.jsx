import React from 'react'
import * as Redux from 'react-redux'
import StepsListing from 'StepsListing'
import * as testActions from '../actions/testActions'

class StepOverview extends React.Component {
  componentDidMount () {
    // load test
    const {dispatch, editTest} = this.props
    const testKey = this.props.params.testKey

    if (editTest.id !== testKey) {
      dispatch(testActions.getSingleTest(testKey))
    }
  }
  render () {
    const {auth, editTest} = this.props
    const getFirstName = () => {
      var firstName = auth.displayName
      if (typeof firstName === 'string') {
        firstName = firstName.split(' ')[0]
      }
      return firstName
    }

    if (!('core' in editTest)) {
      return (
        <div>Loading</div>
      )
    } else {
      return (
        <div>
          <h2>You're doing great, {getFirstName()}</h2>
          <h5>
            In the next step we’ll define on which dates you would like to conduct the tests. Easy peasy!
          </h5>
          <h2>{editTest.core.title}</h2>
          <StepsListing />
        </div>
      )
    }
  }
}

export default Redux.connect(
  (state) => state
)(StepOverview)
