import React from 'react'
import * as Redux from 'react-redux'
import {Route} from 'react-router-dom'

import Nav from 'Nav'
import TestsApp from 'TestsApp'
import StepsApp from 'StepsApp'
import TestView from 'TestView'

export class Main extends React.Component {
  componentDidMount () {
    const {history} = this.props
    if (this.props.auth.isLoggedIn !== true) {
      history.push('/login')
    }
  }
  componentDidUpdate () {
    const {history} = this.props
    if (this.props.auth.isLoggedIn !== true) {
      history.push('/login')
    }
  }
  render () {
    return (
      <div>
        <Nav />
        <div className='row'>
          <div className='column small-centered medium-11 large-11'>
            <Route exact path='/' component={TestsApp} />
            <Route path='/get-approoved' component={StepsApp} />
            <Route path='/test/:testKey' component={TestView} />
          </div>
        </div>
      </div>
    )
  }
}

export default Redux.connect(
  (state) => {
    return {
      auth: state.auth
    }
  }
)(Main)
