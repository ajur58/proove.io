import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'

class TestsList extends React.Component {
  render () {
    return (
      <div>
        <h1>Tests</h1>
        <Link to='/tests/new'>+ Create new test</Link>
      </div>
    )
  }
}

export default Redux.connect()(TestsList)
