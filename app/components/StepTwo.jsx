import React from 'react'
import * as Redux from 'react-redux'
import * as testActions from '../actions/testActions'

export class StepTwo extends React.Component {
  onSubmit (e) {
    e.preventDefault()
    var {dispatch} = this.props

    var test = {people: {}}
    test['id'] = this.props.params.testKey
    test['people']['amount'] = this.refs.amount.value
    test['people']['reward'] = this.refs.reward.value
    test['people']['skills'] = this.refs.skills.value

    if (test['people']['amount'] !== '') {
      dispatch(testActions.startEditTest(test, 2))
    } else {
      this.refs.platform.focus()
    }
  }
  render () {
    return (
      <div className='step__form'>
        <h3>Step Two: People</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label className='label-text' htmlFor='amount'>Number of people</label>
          <input id='amount' type='text' ref='amount' placeholder='How many testers do you need?' />

          <label className='label-text' htmlFor='reward'>Reward</label>
          <input id='reward' type='text' ref='reward' placeholder='How much will you pay them?' />

          <label className='label-text' htmlFor='skills'>Skills</label>
          <input id='skills' type='text' ref='skills' placeholder='Are you looking for something specific?' />

          <fieldset className='fieldset'>
            <legend className='label-text'>Age group</legend>
            <input id='checkbox-young' type='checkbox' /><label htmlFor='checkbox-young'>Youngsters</label>
            <input id='checkbox-adult' type='checkbox' /><label htmlFor='checkbox-adult'>Adults</label>
            <input id='checkbox-elderly' type='checkbox' /><label htmlFor='checkbox-elderly'>Elderly</label>
          </fieldset>

          <fieldset className='fieldset'>
            <legend className='label-text'>Gender</legend>
            <input id='checkbox-male' type='checkbox' /><label htmlFor='checkbox-male'>Male</label>
            <input id='checkbox-female' type='checkbox' /><label htmlFor='checkbox-female'>Female</label>
            <input id='checkbox-random' type='checkbox' /><label htmlFor='checkbox-random'>Doesn't matter</label>
          </fieldset>
          <button className='button primary'>Save and Continue</button>
        </form>
      </div>
    )
  }
}

export default Redux.connect()(StepTwo)
