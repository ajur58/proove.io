import React from 'react'
import * as Redux from 'react-redux'

import StepsListItem from 'StepsListItem'
import {StepsConfig} from '../data/steps'

export class StepsListing extends React.Component {
  render () {
    const {editTest} = this.props
    return (
      <div>
        {
          StepsConfig.map((step) => {
            switch (true) {
              case step.id < editTest.core.stepActive:
                return <StepsListItem {...step} key={step.name} status='done' />
              case step.id === editTest.core.stepActive:
                return <StepsListItem {...step} key={step.name} status='active' />
              case step.id > editTest.core.stepActive:
              default:
                return <StepsListItem {...step} key={step.name} status='inactive' />
            }
          })
        }
      </div>
    )
  }
}

export default Redux.connect()(StepsListing)
