import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router-dom'
import TestsList from 'TestsList'
import TestsSearch from 'TestsSearch'

class TestsApp extends React.Component {
  render () {
    return (
      <div>
        <h1>Tests <Link to='/get-approoved'>+ Create new test</Link></h1>
        <TestsSearch showCompleted={false} />
        <TestsList />
      </div>
    )
  }
}

export default Redux.connect()(TestsApp)
