import React from 'react'
import {connect} from 'react-redux'

import StepsListing from 'containers/StepsListing'
import stepsLayoutHOC from 'containers/StepsApp/StepsLayoutHOC'

class StepOverview extends React.Component {
  render () {
    const {auth, currentTest, isFetching, match} = this.props
    const viewTest = this.props.tests[currentTest]

    const stepActive = () => {
      // based on Airbnb guideline. never use hasOwnProperty directly on object
      const has = Object.prototype.hasOwnProperty

      if (has.call(viewTest, 'results')) {
        return 6
      } else if (has.call(viewTest, 'showtime')) {
        return 5
      } else if (has.call(viewTest, 'schedule')) {
        return 4
      } else if (has.call(viewTest, 'people')) {
        return 3
      } else {
        return 2
      }
    }

    const getFirstName = () => {
      var firstName = auth.displayName
      if (typeof firstName === 'string') {
        firstName = firstName.split(' ')[0]
      }
      return firstName
    }

    if (isFetching === true) {
      return (
        <div className='step__pretty-high'>Loading</div>
      )
    } else {
      if (viewTest === undefined) {
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
            <h2>You're doing great, {getFirstName()}</h2>
            <h5>
              In the next step we’ll define on which dates you would like to conduct the tests. Easy peasy!
            </h5>
          </div>
          <StepsListing viewTest={viewTest} match={match} stepActive={stepActive()} />
        </div>
      )
    }
  }
}

export default stepsLayoutHOC(connect(
  (state) => state
)(StepOverview))
