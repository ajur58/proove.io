import React from 'react'
import * as Redux from 'react-redux'

import StepsListItem from 'StepsListItem'
import {StepsConfig} from '../data/steps'

export class StepsListing extends React.Component {
  render () {
    const {currentTest} = this.props
    const testLink = `/get-approoved/test/${currentTest.id}`
    return (
      <div className='row step__list'>
          {
            StepsConfig.map((step) => {
              switch (true) {
                case step.id < currentTest.stepActive:
                  return <StepsListItem {...step} key={step.name} status='done' testLink={testLink} />
                case step.id === currentTest.stepActive:
                  return <StepsListItem {...step} key={step.name} status='active' testLink={testLink} />
                case step.id > currentTest.stepActive:
                default:
                  return <StepsListItem {...step} key={step.name} status='inactive' testLink={testLink} />
              }
            })
          }
      </div>
    )
  }
}

export default Redux.connect()(StepsListing)
