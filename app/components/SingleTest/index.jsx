import React from 'react';
import {connect} from 'react-redux';
import {Button, Card, Grid, List, Segment} from 'semantic-ui-react';

import {getSingleTest} from 'actions/testActions';
import classes from './single_test.scss';

class SingleTest extends React.Component {
  componentWillMount () {
    // load test
    const {dispatch} = this.props;
    const testKey = this.props.match.params.testKey;
    dispatch(getSingleTest(testKey));
  }
  componentDidUpdate () {
    // load test
    const {dispatch} = this.props;
    const testKey = this.props.match.params.testKey;
    dispatch(getSingleTest(testKey));
  }
  render () {
    const {currentTest, isFetching} = this.props;
    const viewTest = this.props.tests[currentTest];

    if (isFetching === true) {
      return (
        <div className='step__pretty-high'>Loading</div>
      );
    } else {
      if (currentTest.length === 0) {
        return (
          <div className='step__pretty-high'>
            <h2>Test not found</h2>
          </div>
        );
      }
      return (
        <Grid>
          <Grid.Row centered columns={2}>
            <Grid.Column textAlign='left' width={8}>
              <h5 className={classes.smallTitle}>Invitation from tutti.ch to test their app</h5>
              <Segment>
                Hello there! I’m Michael from tutti.ch and I would like to invite you to our office to test our app’s latest features.
              </Segment>

              <h5 className={classes.smallTitle}>Why</h5>
              <p className={classes.explainText}>
                We believe that only by working closely with our users we can assure the best possible experience for our products.
              </p>
              <h5 className={classes.smallTitle}>What is a user test?</h5>
              <p className={classes.explainText}>
                During this 30’ session we will show you the app and go through a couple of scenarios together. We are testing that the app is easy to understand, we’re not testing you.
              </p>
              <h5 className={classes.smallTitle}>What’s in it for me?</h5>
              <p className={classes.explainText}>
                Besides the reward, you can have a sneak-peek behind the curtains, see upcoming features before everyone else sees them and play an integral role in shaping the product.
              </p>

              <h4>I'm excited to meet you!</h4>

              <p className={classes.explainText}>
                Michael, <br />
                Product Manager at tutti.ch
              </p>
            </Grid.Column>
            <Grid.Column textAlign='left' width={6}>
              <Card fluid>
                <Card.Content>
                  <Card.Header content='We are looking for' />
                  <Card.Description>
                    <p className={classes.explainText}>
                      Android users speaking German or English, between 20 and 65 years old in the Zürich area.
                    </p>
                    <Segment className={classes.eventDetails} size='big' padded secondary>
                      <List>
                        <List.Item>
                          <List.Icon name='calendar' size='large' />
                          <List.Content>
                            Mo, 3. April; Tue, 4. April;
                            Wed, 5. April
                          </List.Content>
                        </List.Item>
                        <List.Item size='big'>
                          <List.Icon name='marker' size='large' />
                          <List.Content>
                            tutti.ch HQ, Tamedia building
                            Werdstrasse 21
                            8001, Zürich
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Icon name='wait' size='large' />
                          <List.Content>
                            45 minutes
                          </List.Content>
                        </List.Item>
                      </List>
                    </Segment>
                    <p className={classes.explainText}>Cash reward: 50.-</p>
                    <div className='ui two buttons'>
                      <Button positive size='big'>Sign Me Up</Button>
                      <Button basic>Ask Question</Button>
                    </div>
                  </Card.Description>

                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  }
}

function mapStateToProps (state, ownProps) {
  return {
    currentTest: state.currentTest,
    tests: state.tests,
    isFetching: state.isFetching
  };
}

export default connect(mapStateToProps)(SingleTest);
