import React from 'react'
import * as Redux from 'react-redux'

class NewTestNav extends React.Component {
  render () {
    return (
      <div>
        <div className='row'>
          <div className='column small-12 medium-10 large-8'>
            <button className='button primary'>Save and exit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(NewTestNav)
