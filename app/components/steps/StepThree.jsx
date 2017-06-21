import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Container, Form } from 'semantic-ui-react'

import {renderInput, renderTextarea} from 'helpers/forms'
import stepsLayoutHOC from 'containers/StepsApp/StepsLayoutHOC'

import './step.scss'

export class StepThree extends React.Component {
  render () {
    const {handleSubmit} = this.props
    return (
      <Container className='step__form'>
        <h3>Step Three: Schedule</h3>
        <Form onSubmit={handleSubmit} error>
          <Field
            name='schedule[date]'
            component={renderInput}
            type='text'
            label='Date'
            placeholder='When are you conducting the tests?' />

          <Field
            name='people[time]'
            component={renderInput}
            type='text'
            label='Time'
            placeholder='At what time?' />

          <Field
            name='people[location]'
            type='textarea'
            component={renderTextarea}
            label='Location'
            placeholder='Enter the address where the tests will take place.' />
          <Button type='submit' primary>Save and Continue</Button>
        </Form>
      </Container>
    )
  }
}

function validate (formProps) {
  const errors = {}
  if (!formProps.date) {
    errors.date = 'Date'
  }
  if (!formProps.time) {
    errors.time = 'Time'
  }
  if (!formProps.location) {
    errors.location = 'Location'
  }

  return errors
}

const StepThreeForm = reduxForm({
  form: 'stepThree',
  enableReinitialize: true,
  validate
})(StepThree)

function mapStateToProps (state, ownProps) {
  return {
    initialValues: state.tests[state.currentTest]
  }
}

export default stepsLayoutHOC(connect(mapStateToProps)(StepThreeForm))
