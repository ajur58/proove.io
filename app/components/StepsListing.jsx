import React from 'react'
import * as Redux from 'react-redux'
import StepListItem from 'StepListItem'

export class StepsListing extends React.Component {
  render () {
    return (
      <div>
        <div className='step'>
          <StepListItem title='Set the scene' subtitle='Hypotheses & Scenarios' status='pending' />
          <StepListItem title='Users' subtitle='Number of testers, age, gender' status='completed' />
          <StepListItem title='Schedule' subtitle='When to conduct the test, duration, locartion' status='completed' />
          <StepListItem title='Select Testers' subtitle='Choose and schedule applicants' status='completed' />
          <StepListItem title='Showtime' subtitle='Prepare materials, track results' status='completed' />
        </div>
        <button className='button primary'>Save and exit</button>
      </div>
    )
  }
}

export default Redux.connect()(StepsListing)
