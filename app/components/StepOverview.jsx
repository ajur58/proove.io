import React from 'react'
import * as Redux from 'react-redux'
import StepsListing from 'StepsListing'

class StepOverview extends React.Component {
  render () {
    const {auth} = this.props
    const getFirstName = () => {
      var firstName = auth.displayName
      if (typeof firstName === 'string') {
        firstName = firstName.split(' ')[0]
      }
      return firstName
    }
    return (
      <div>
        <h2>You're doing great, {getFirstName()}</h2>
        <h5>
          In the next step we’ll define on which dates you would like to conduct the tests. Easy peasy!
        </h5>
        <StepsListing />
      </div>
    )
  }
}

export default Redux.connect(
  (state) => state
)(StepOverview)
