import React from 'react'
import * as Redux from 'react-redux'
import * as testActions from '../actions/testActions'

export class StepOne extends React.Component {
  onSubmit (e) {
    e.preventDefault()
    var {dispatch} = this.props
    var testCore = {}
  }
  render () {
    return (
      <div className='step'>
        <h3>Step Two: People</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' ref='age' placeholder='Age' />
          <input type='text' ref='gender' placeholder='Gender' />
          <input type='text' ref='skills' placeholder='Skills' />
          <button className='button primary'>Save and Continue</button>
        </form>
      </div>
    )
  }
}

export default Redux.connect()(StepOne)
