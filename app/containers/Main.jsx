import React from 'react'

import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Nav from 'Nav'
import NoMatch from 'NoMatch'
import TestView from 'TestView'
import TestsApp from 'containers/TestsApp'
import StepsApp from 'containers/StepsApp'
import NewTest from 'containers/NewTest'

class Main extends React.Component {
  componentDidUpdate () {
    if (this.props.isLoggedIn !== true) {
      const {history} = this.props
      history.push('/login')
    }
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='row'>
          <div className='column small-centered medium-11 large-11'>
            <Switch>
              <Route exact path={`${this.props.match.url}`} component={TestsApp} />
              <Route exact path={`${this.props.match.url}get-approoved/new`} component={NewTest} />
              <Route path={`${this.props.match.url}get-approoved/:testKey`} component={StepsApp} />
              <Route path={`${this.props.match.url}view/:testKey`} component={TestView} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Main)
