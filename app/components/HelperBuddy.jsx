import React from 'react'
import * as Redux from 'react-redux'
import MdEventAvailable from 'react-icons/md/event-available'

class HelperBuddy extends React.Component {
  render () {
    return (
      <div>
        <h2>Did you know?</h2>
        <p>Including user test as part of the product development process can reduce costs by more than 70%!</p>
        <p>
          Lorem ipsum dolor sit amet here more text.
          Because that’s how it is.
        </p>
        <a>Find out more</a>
        <div className='floater-icon'>
          <MdEventAvailable />
        </div>
      </div>
    )
  }
}

export default Redux.connect(
  (state) => state
)(HelperBuddy)
