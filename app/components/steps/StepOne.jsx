import React from 'react'
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Container, Form, Message } from 'semantic-ui-react'

import {renderInput, renderSelect, renderTextarea} from 'helpers/forms'
import stepsLayoutHOC from 'containers/StepsApp/StepsLayoutHOC'

import './step.scss'

export class StepOne extends React.Component {
  render () {
    var displayErrors = () => {
      console.log(this)
      // for (let s of form.stepOne.syncErrors) {
      //   console.log(s)
      // }
    }

    const {handleSubmit, error} = this.props

    // this was necessary because redux forms was not recognising onChange of semantic ui Dropdown
    function handleSelectChange (e, {value}) {
      this.props.change('platform', value)
    }

    return (
      <Container className='step__form'>
        <h3>First step: Set the scene</h3>
        <Form onSubmit={handleSubmit} error>
          <Field
            name='title'
            component={renderInput}
            type='text'
            label='Title'
            placeholder='For example: New search experience' />
          <Field name='platform' component={renderSelect} label='Platform'
            placeholder='Choose a platform'
            handleOnChange={handleSelectChange.bind(this)}
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
            placeholder='What do you assume will happen?' />

          <Field
            name='scenarios'
            type='textarea'
            component={renderTextarea}
            label='Scenarios'
            placeholder='Describe each story you will walk the testers through.' />

          {error && <Message
            error
            header='Oops, you missed some fields'
            content={displayErrors.bind(this)}
          />}
          <Button type='submit' primary>Save and Continue</Button>
        </Form>
      </Container>
    )
  }
}

function validate (formProps) {
  const errors = {}

  if (!formProps.title) {
    errors.title = 'Seems like you forgot to enter a title'
  }

  if (!formProps.platform) {
    errors.platform = 'Please choose a platform'
  }

  if (!formProps.hypotheses) {
    errors.hypotheses = 'Add some Hypotheses'
  }

  if (!formProps.scenarios) {
    errors.scenarios = 'At least one Scenario is needed'
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

export default stepsLayoutHOC(connect(mapStateToProps)(StepOneForm))
