import React from 'react'
import * as Redux from 'react-redux'

import StepListItem from 'StepListItem'
import {StepsConfig} from '../data/steps'

export class StepsListing extends React.Component {
  render () {
    return (
      <div>
        {StepsConfig.map((step) => {
          return (
            <StepListItem {...step} key={step.name} />
          )
        })}
      </div>
    )
  }
}

export default Redux.connect()(StepsListing)
