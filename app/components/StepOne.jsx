import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'
var {hashHistory} = require('react-router')

export class StepOne extends React.Component {
  onSubmit (e) {
    e.preventDefault()
    var {dispatch} = this.props
    var title = this.refs.title.value
    var platform = this.refs.platform.value

    if (typeof title === 'string' && title.length > 0) {
      if (platform !== '') {
        dispatch(actions.startAddTest(title, platform))
        hashHistory.push('/tests')
      } else {
        this.refs.platform.focus()
      }
    } else {
      this.refs.title.focus()
    }
  }
  render () {
    return (
      <div className='step'>
        <h3>Step One - The Basics</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='text' ref='title' placeholder="Your test's title" />
          <select ref='platform'>
            <option value=''>Choose platform</option>
            <option value='android'>Android</option>
            <option value='ios'>iOS</option>
            <option value='web'>Web</option>
          </select>
          <button className='button primary'>Save and Continue</button>
        </form>
      </div>
    )
  }
}

export default Redux.connect()(StepOne)
