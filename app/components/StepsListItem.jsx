import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'
import FaCheckCircle from 'react-icons/fa/check-circle'

export class StepsListItem extends React.Component {
  render () {
    var {title, description, link, testLink, status} = this.props
    var showContinueButton = (status) => {
      switch (status) {
        case 'active':
          return <Link to={testLink + link} className='button primary'>Continue</Link>
        case 'done':
          return <Link to={testLink + link} className=''>Edit</Link>
        case 'inactive':
        default:
          return ''
      }
    }
    var showCheckedIcon = (status) => {
      if (status === 'done') {
        return <FaCheckCircle size={32} className='step__checked' />
      }
    }
    return (
      <div className={`step__${status}` + ' step row'}>
        <div className='column small-10'>
          <h3>{title}</h3>
          <p>{description}</p>
          {showContinueButton(status)}
        </div>
        <div className='column small-2'>
          {showCheckedIcon(status)}
        </div>
      </div>
    )
  }
}

export default Redux.connect()(StepsListItem)
