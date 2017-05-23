import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Container, Form, Message } from 'semantic-ui-react'

import {renderField, renderSelect, renderTextarea} from 'helpers/forms'

import './step.scss'

export class StepOne extends React.Component {
  render () {
    var displayErrors = () => {
      var errors = 'as'
      return errors
      // for (let s of form.stepOne.syncErrors) {
      //   console.log(s)
      // }
    }

    const {handleSubmit} = this.props
    return (
      <Container className='step__form'>
        <h3>First step: Set the scene</h3>
        <Form onSubmit={handleSubmit} error>
          <Field
            name='title'
            component={renderField}
            type='text'
            label='Title'
            placeholder="Your test's title" />
          <Field name='platform' component={renderSelect} label='Platform'
            options={[
              {
                text: 'Android',
                value: 'android'
              },
              {
                text: 'iOS',
                value: 'ios'
              },
              {
                text: 'Desktop',
                value: 'web'
              }
            ]}
          />
          <Field
            name='hypotheses'
            type='textarea'
            component={renderTextarea}
            label='Hypotheses'
            placeholder='What are your hypotheses?' />

          <Field
            name='scenarios'
            type='textarea'
            component={renderTextarea}
            label='Scenarios'
            placeholder='Describe the scenarios you want to test' />

          <Field
            name='activeStep'
            component='input'
            type='hidden'
            value={1}
          />
          <Message
            error
            header='Oops, you missed some fields'
            content={displayErrors()}
          />
          <Button type='submit' primary>Save and Continue</Button>
        </Form>
      </Container>
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
