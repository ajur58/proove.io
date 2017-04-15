import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'

export class StepListItem extends React.Component {
  render () {
    var {title, subtitle, status} = this.props
    var showContinueButton = (status) => {
      if (status === 'pending') {
        return (
          <Link to='/tests/new/steps/1' className='button primary'>Continue</Link>
        )
      }
    }
    return (
      <div className='step'>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {showContinueButton(status)}
      </div>
    )
  }
}

export default Redux.connect()(StepListItem)
