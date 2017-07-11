import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Container, Form, Icon, Header } from 'semantic-ui-react';

import {renderInput, renderTextarea} from 'helpers/forms';
import ResourcesList from './ResourcesList';
import stepsLayoutHOC from 'containers/StepsApp/StepsLayoutHOC';

import './step.scss';

export class StepFour extends React.Component {
  render () {
    const {handleSubmit} = this.props;
    return (
      <Container className='step__form'>
        <Header as='h3'>Step Four: Showtime</Header>
        <Header as='h4'>Here's a nifty collection of resources that might come in handy</Header>
        <ResourcesList />
        <Form onSubmit={handleSubmit} error>
          <Button type='submit' primary>Proceed to Results</Button>
        </Form>
      </Container>
    );
  }
}

function validate (formProps) {
  const errors = {};
  if (!formProps.date) {
    errors.date = 'Date';
  }
  if (!formProps.time) {
    errors.time = 'Time';
  }
  if (!formProps.location) {
    errors.location = 'Location';
  }

  return errors;
}

const StepFourForm = reduxForm({
  form: 'stepFour',
  enableReinitialize: true,
  validate
})(StepFour);

function mapStateToProps (state, ownProps) {
  let initialValues = state.tests[state.currentTest];
  //@TODO this adds the showtime param to state even without saving the form, shouldn't be the case
  initialValues['showtime'] = 1;
  return {
    initialValues: initialValues
  };
}

export default stepsLayoutHOC(connect(mapStateToProps)(StepFourForm));
