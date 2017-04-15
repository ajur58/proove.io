import React from 'react'
import * as Redux from 'react-redux'
import TestStep from 'TestStep'

class TestCreate extends React.Component {
  render () {
    const {auth} = this.props
    const getFirstName = (fullName) => {
      return fullName.split(' ')[0]
    }
    return (
      <div>
        <div className='row'>
          <div className='column small-12 medium-10 large-8'>
            <div className='container'>
              <h2>You're doing great, {getFirstName(auth.displayName)}</h2>
              <h5>
                In the next step we’ll define on which dates you would like to conduct the tests. Easy peasy!
              </h5>
              <TestStep title='Set the scene' subtitle='Hypotheses & Scenarios' status='completed' />
              <TestStep title='Users' subtitle='Number of testers, age, gender' status='completed' />
              <TestStep title='Schedule' subtitle='When to conduct the test, duration, locartion' status='pending' />
              <TestStep title='Select Testers' subtitle='Choose and schedule applicants' status='completed' />
              <TestStep title='Showtime' subtitle='Prepare materials, track results' status='completed' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect(
  (state) => state
)(TestCreate)
