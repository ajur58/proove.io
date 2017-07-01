import React from 'react';

import StepsListItem from './StepsListItem';
import {StepsConfig} from './steps';

import './steps_listing.scss';

export class StepsListing extends React.Component {
  render () {
    const {match, stepActive} = this.props;

    return (
      <div className='row step__list'>
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
      </div>
    );
  }
}

export default StepsListing;
