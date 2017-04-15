import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'
import TestsList from 'TestsList'
import TestsSearch from 'TestsSearch'

class TestsApp extends React.Component {
  render () {
    return (
      <div>
        <h1>Tests</h1>
        <Link to='/tests/new'>+ Create new test</Link>
        <TestsSearch />
        <TestsList />
      </div>
    )
  }
}

export default Redux.connect()(TestsApp)
