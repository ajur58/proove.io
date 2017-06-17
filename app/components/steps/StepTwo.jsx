import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Container, Form } from 'semantic-ui-react'

import {renderInput, renderTextarea} from 'helpers/forms'
import stepsLayoutHOC from 'containers/StepsApp/StepsLayoutHOC'

import './step.scss'

export class StepTwo extends React.Component {
  render () {
    const {handleSubmit} = this.props
    return (
      <Container className='step__form'>
        <h3>Step Two: People</h3>
        <Form onSubmit={handleSubmit} error>
          <Field
            name='people[amount]'
            component={renderInput}
            type='text'
            label='Number of testers'
            placeholder='How many testers do you need?' />

          <Field
            name='people[reward]'
            component={renderInput}
            type='text'
            label='Reward'
            placeholder='How much will you pay them?' />

          <Field
            name='people[skills]'
            type='textarea'
            component={renderTextarea}
            label='Tester Traits'
            placeholder='Are you looking for any specific skills or traits like age group?' />
          <Button type='submit' primary>Save and Continue</Button>
        </Form>
      </Container>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.amount) {
    errors.amount = 'How many testers do you need?'
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

export default stepsLayoutHOC(connect(mapStateToProps)(StepTwoForm))
