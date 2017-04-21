import React from 'react'
import * as Redux from 'react-redux'

import StepsListItem from 'StepsListItem'
import {StepsConfig} from '../data/steps'

export class StepsListing extends React.Component {
  render () {
    return (
      <div>
        {
          StepsConfig.map((step) => <StepsListItem {...step} key={step.name} />)
        }
      </div>
    )
  }
}

export default Redux.connect()(StepsListing)
