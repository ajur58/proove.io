import React from 'react';
import {Grid} from 'semantic-ui-react';

import HelperBuddy from 'HelperBuddy';

import './steps_app.scss';

export default function stepsLayoutHOC (WrappedComponent) {
  return class extends React.Component {
    render () {
      return (
        <Grid>
          <Grid.Column mobile={16} tablet={10} computer={8}>
            <Grid.Row>
              <WrappedComponent {...this.props} />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column tablet={6} computer={6} className='columns hide-for-small-only medium-4 large-5 helper-buddy'>
            <Grid.Row>
              <HelperBuddy />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      );
    }
  };
}
