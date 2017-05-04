import React from 'react'
import {Route, Switch} from 'react-router-dom'

import StepOne from 'StepOne'
import StepTwo from 'StepTwo'
import StepOverview from 'StepOverview'
import HelperBuddy from 'HelperBuddy'

const StepsApp = ({ match }) => (
  <div className='row flexbox-container'>
    <div className='columns small-12 medium-8 large-7'>
      <div className='row'>
        <div className='column small-11 medium-10 large-9'>
          <Switch>
            <Route exact path={match.url} component={StepOne} />
            <Route exact path={`${match.url}/:testKey`} component={StepOverview} />
            <Route path={`${match.url}/:testKey/basics`} component={StepOne} />
            <Route path={`${match.url}/:testKey/people`} component={StepTwo} />
            <Route component={NoMatch} />
          </Switch>
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

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found <code>{location.pathname}</code></h3>
  </div>
)

export default StepsApp
