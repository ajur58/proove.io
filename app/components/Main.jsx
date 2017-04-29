import React from 'react'

import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import Nav from 'Nav'
import NoMatch from 'NoMatch'
import TestsApp from 'TestsApp'
import StepsApp from 'StepsApp'
import TestView from 'TestView'

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
              <Route path={`${this.props.match.url}get-approoved`} component={StepsApp} />
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
