import React from 'react'
import * as Redux from 'react-redux'
import * as testActions from '../actions/testActions'

export class StepOne extends React.Component {
  onSubmit (e) {
    e.preventDefault()
    var {dispatch} = this.props
    var testCore = {}
    testCore['title'] = this.refs.title.value
    testCore['platform'] = this.refs.platform.value
    testCore['hypotheses'] = this.refs.hypotheses.value
    testCore['scenarios'] = this.refs.scenarios.value

    if (typeof testCore['title'] === 'string' && testCore['title'].length > 0) {
      if (testCore['platform'] !== '') {
        dispatch(testActions.startAddTest(testCore))
      } else {
        this.refs.platform.focus()
      }
    } else {
      this.refs.title.focus()
    }
  }
  render () {
    return (
      <div className='step__form'>
        <h3>First step: Set the scene</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label className='label-text' htmlFor='title'>Title</label>
          <input id='title' type='text' ref='title' placeholder="Your test's title" />

          <label className='label-text' htmlFor='platform'>Platform</label>
          <select id='platform' ref='platform'>
            <option value=''>Choose platform</option>
            <option value='android'>Android</option>
            <option value='ios'>iOS</option>
            <option value='web'>Web</option>
          </select>

          <label className='label-text' htmlFor='hypotheses'>Hypotheses</label>
          <textarea id='hypotheses' rows='5' ref='hypotheses' placeholder='What are your hypotheses?' />

          <label className='label-text' htmlFor='scenarios'>Scenarios</label>
          <textarea id='scenarios' rows='5' ref='scenarios' placeholder='Describe the scenarios you want to test' />

          <button className='button primary'>Save and Continue</button>
        </form>
      </div>
    )
  }
}

export default Redux.connect()(StepOne)
