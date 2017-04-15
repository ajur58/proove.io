import React from 'react'
import * as Redux from 'react-redux'
import StepsListing from 'StepsListing'

class StepOverview extends React.Component {
  render () {
    const {auth} = this.props
    const getFirstName = (fullName) => {
      return fullName.split(' ')[0]
    }
    return (
      <div>
        <h2>You're doing great, {getFirstName(auth.displayName)}</h2>
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
