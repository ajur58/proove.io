import React from 'react'
import * as Redux from 'react-redux'
import HelperBuddy from 'HelperBuddy'

class NewTest extends React.Component {
  render () {
    return (
      <div>
        <div className='row flexbox-container'>
          <div className='columns small-12 medium-8 large-8'>
            <div className='container'>
              {this.props.children}
            </div>
          </div>
          <div className='columns small-0 medium-4 large-4 helper-buddy'>
            <div className='container'>
              <HelperBuddy />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect(
  (state) => state
)(NewTest)
