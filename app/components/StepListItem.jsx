import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'

export class StepListItem extends React.Component {
  render () {
    var {title, description, link, status} = this.props
    var showContinueButton = (status) => {
      if (status === 'active') {
        return (
          <Link to={link} className='button primary'>Continue</Link>
        )
      }
    }
    return (
      <div className='step'>
        <h3>{title}</h3>
        <p>{description}</p>
        {showContinueButton(status)}
      </div>
    )
  }
}

export default Redux.connect()(StepListItem)
