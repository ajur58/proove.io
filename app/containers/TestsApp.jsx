import React from 'react';
import {Link} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';

import TestsList from 'TestsList';
import TestsSearch from 'TestsSearch';

const TestsApp = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column mobile='16' tablet='14' computer='12'>
        <h1>Tests <Link to='/get-approoved/new'>+ Create new test</Link></h1>
        <TestsSearch showCompleted={false} />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column mobile='16'>
        <TestsList />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default TestsApp;
