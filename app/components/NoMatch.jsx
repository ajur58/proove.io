import React from 'react'

const NoMatch = ({ location, header }) => (
  <div className='row'>
    <div className='column small-centered medium-11 large-11'>
      <h3>Page not found <code>{location.pathname}</code></h3>
    </div>
  </div>
)

export default NoMatch
