import React from 'react'
import * as Redux from 'react-redux'
import {Link} from 'react-router'

class Test extends React.Component {
  render () {
    var {id, dispatch, title, createdAt, modifiedAt, platform} = this.props
    return (
      <div>
        <h3>{title} - {platform}</h3>
        <p>{createdAt}</p>
      </div>
    )
  }
}

export default Redux.connect()(Test)
