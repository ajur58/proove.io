import React from 'react'
import * as Redux from 'react-redux'
import StepsListing from 'StepsListing'
import HelperBuddy from 'HelperBuddy'

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
        <div>
          <div className='row flexbox-container'>
            <div className='columns small-12 medium-8 large-8'>
              <div className='container'>
                {this.props.children}
              </div>
            </div>
            <div className='columns hide-for-small-only medium-4 large-4 helper-buddy'>
              <div className='container'>
                <HelperBuddy />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect(
  (state) => state
)(StepOverview)
