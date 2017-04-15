import React from 'react'
import * as Redux from 'react-redux'

class NewTest extends React.Component {
  render () {
    return (
      <div>
        <div className='row'>
          <div className='column small-12 medium-8 large-8'>
            <div className='container'>
              {this.props.children}
            </div>
          </div>
          <div className='column small-0 medium-4 large-4'>
            <div className='container'>
              Help container goes here
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
