import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import {renderField, renderSelect, renderTextarea} from '../helpers/forms'

export class StepOne extends React.Component {
  render () {
    const {handleSubmit} = this.props
    return (
      <div className='step__form'>
        <h3>First step: Set the scene</h3>
        <form onSubmit={handleSubmit}>
          <Field
            name='title'
            component={renderField}
            type='text'
            label='Title'
            placeholder="Your test's title" />

          <Field name='platform' component={renderSelect} label='Platform'>
            <option value=''>Choose platform</option>
            <option value='android'>Android</option>
            <option value='ios'>iOS</option>
            <option value='web'>Web</option>
          </Field>
          <Field
            name='hypotheses'
            component={renderTextarea}
            rows='5'
            label='Hypotheses'
            placeholder='What are your hypotheses?' />

          <Field
            name='scenarios'
            component={renderTextarea}
            rows='5'
            label='Scenarios'
            placeholder='Describe the scenarios you want to test' />

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

const StepOneForm = reduxForm({
  form: 'stepOne',
  enableReinitialize: true,
  validate
})(StepOne)

function mapStateToProps (state, ownProps) {
  return {
    initialValues: state.tests[state.currentTest]
  }
}

export default connect(mapStateToProps)(StepOneForm)
