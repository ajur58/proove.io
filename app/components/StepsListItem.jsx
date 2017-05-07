import React from 'react'
import {Link} from 'react-router-dom'

export class StepsListItem extends React.Component {
  render () {
    var {description, match, slug, status, title} = this.props
    var showContinueButton = (status) => {
      switch (status) {
        case 'active':
          return <Link to={`${match.url}/${slug}`} className='button primary'>Continue</Link>
        case 'done':
          return <Link to={`${match.url}/${slug}`} className=''>Edit</Link>
        case 'inactive':
        default:
          return ''
      }
    }
    var showCheckedIcon = (status) => {
      if (status === 'done') {
        return 'done'
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

export default StepsListItem
