import React from 'react'
import {Route} from 'react-router-dom'

import StepOne from 'StepOne'
import StepTwo from 'StepTwo'
import StepOverview from 'StepOverview'
import HelperBuddy from 'HelperBuddy'

const StepsApp = ({ match }) => (
  <div className='row flexbox-container'>
    <div className='columns small-12 medium-8 large-7'>
      <div className='row'>
        <div className='column small-11 medium-10 large-9'>
          <Route exact path={match.url} component={StepOne} />
          <Route exact path={`${match.url}/test/:testKey`} component={StepOverview} />
          <Route path={`${match.url}/test/:testKey/basics`} component={StepOne} />
          <Route path={`${match.url}/test/:testKey/people`} component={StepTwo} />
        </div>
      </div>
    </div>
    <div className='columns hide-for-small-only medium-4 large-5 helper-buddy'>
      <div className='container'>
        <HelperBuddy />
      </div>
    </div>
  </div>
)

export default StepsApp
