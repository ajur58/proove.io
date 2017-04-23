import React from 'react'
import * as Redux from 'react-redux'
import {hashHistory} from 'react-router'

import StepsListing from 'StepsListing'
import * as testActions from '../actions/testActions'

class StepOverview extends React.Component {
  componentWillMount () {
    // load test
    const {dispatch, editTest} = this.props
    const testKey = this.props.params.testKey

    dispatch(testActions.getSingleTest(testKey))
  }
  render () {
    const {auth, editTest, isFetching} = this.props
    const getFirstName = () => {
      var firstName = auth.displayName
      if (typeof firstName === 'string') {
        firstName = firstName.split(' ')[0]
      }
      return firstName
    }

    if (isFetching) {
      return (
        <div className='step__pretty-high'>Loading</div>
      )
    } else {
      if (editTest === null) {
        return (
          <div className='step__pretty-high'>
            <h2>Test not found</h2>
          </div>
        )
      }
      return (
        <div>
          <div className='row'>
            <h5 className='step__test-title'>{editTest.title}</h5>
            <hr className='step__test-title-hr' />
            <h2>You're doing great, {getFirstName()}</h2>
            <h5>
              In the next step we’ll define on which dates you would like to conduct the tests. Easy peasy!
            </h5>
          </div>
          <StepsListing editTest={editTest} />
        </div>
      )
    }
  }
}

export default Redux.connect(
  (state) => state
)(StepOverview)
