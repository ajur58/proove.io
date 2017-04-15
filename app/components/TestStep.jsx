import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'

class TestStep extends React.Component {
  render () {
    var {title, subtitle, status} = this.props
    var showContinueButton = (status) => {
      if (status === 'pending') {
        return (
          <button className='button primary'>Continue</button>
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

export default Redux.connect()(TestStep)
