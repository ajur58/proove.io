import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'

export class StepsListItem extends React.Component {
  render () {
    var {title, description, link, status} = this.props
    var showContinueButton = (status) => {
      switch (status) {
        case 'active':
          return <Link to={link} className='button primary'>Continue</Link>
        case 'done':
          return <Link to={link} className=''>Edit</Link>
        case 'inactive':
        default:
          return ''
      }
      if (status === 'active') {

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

export default Redux.connect()(StepsListItem)
