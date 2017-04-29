import React from 'react'
import {Link} from 'react-router-dom'
import TestsList from 'TestsList'
import TestsSearch from 'TestsSearch'

const TestsApp = () => (
  <div>
    <h1>Tests <Link to='/get-approoved'>+ Create new test</Link></h1>
    <TestsSearch showCompleted={false} />
    <TestsList />
  </div>
)

export default TestsApp
