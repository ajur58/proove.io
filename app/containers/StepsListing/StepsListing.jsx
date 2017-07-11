import React from 'react';

import StepsListItem from './StepsListItem';
import {StepsConfig} from './steps';

import {Grid} from 'semantic-ui-react';

import './steps_listing.scss';

export class StepsListing extends React.Component {
  render () {
    const {match, stepActive} = this.props;

    return (
      <Grid>
        {
          StepsConfig.map((step) => {
            switch (true) {
              case step.id < stepActive:
                return <StepsListItem {...step} key={step.name} status='done'
                  match={{url: match.url}} />;
              case step.id === stepActive:
                return <StepsListItem {...step} key={step.name} status='active'
                  match={{url: match.url}} />;
              case step.id > stepActive:
              default:
                return <StepsListItem {...step} key={step.name} status='inactive'
                  match={{url: match.url}} />;
            }
          })
        }
      </Grid>
    );
  }
}

export default StepsListing;
