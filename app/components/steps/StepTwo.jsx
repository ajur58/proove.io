import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import {renderField} from 'helpers/forms'

import './step.scss'

export class StepTwo extends React.Component {
  render () {
    const {handleSubmit} = this.props
    return (
      <div className='step__form'>
        <h3>Step Two: People</h3>
        <form onSubmit={handleSubmit}>
          <Field
            name='amount'
            component={renderField}
            type='text'
            label='Number of testers'
            placeholder='How many testers do you need?' />

          <Field
            name='reward'
            component={renderField}
            type='text'
            label='Reward'
            placeholder='How much will you pay them?' />

          <Field
            name='skills'
            component={renderField}
            type='text'
            label='Skills'
            placeholder='Are you looking for any specific skills?' />

          <fieldset className='fieldset'>
            <legend className='label-text'>Age group</legend>
            <input id='checkbox-young' type='checkbox' /><label htmlFor='checkbox-young'>Youngsters</label>
            <input id='checkbox-adult' type='checkbox' /><label htmlFor='checkbox-adult'>Adults</label>
            <input id='checkbox-elderly' type='checkbox' /><label htmlFor='checkbox-elderly'>Elderly</label>
          </fieldset>

          <button type='submit' className='button primary'>Save and Continue</button>
        </form>
      </div>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.title) {
    errors.title = 'Please enter a title'
  }

  if (!formProps.platform) {
    errors.platform = 'Please choose a platform'
  }

  if (!formProps.hypotheses) {
    errors.hypotheses = 'Please enter some hypotheses'
  }

  if (!formProps.scenarios) {
    errors.scenarios = 'Please enter at least a scenario'
  }

  return errors
}

const StepTwoForm = reduxForm({
  form: 'stepTwo',
  enableReinitialize: true,
  validate
})(StepTwo)

function mapStateToProps (state, ownProps) {
  return {
    initialValues: state.tests[state.currentTest]
  }
}

export default connect(mapStateToProps)(StepTwoForm)
