import React from 'react'
import * as Redux from 'react-redux'
import moment from 'moment'
import {Link} from 'react-router'

class Test extends React.Component {
  render () {
    var renderDate = () => {
      return 'Created at ' + moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')
    }
    var {id, dispatch, title, createdAt, modifiedAt, platform} = this.props
    return (
      <div>
        <h3>{title} - {platform}</h3>
        <p>{renderDate()}</p>
      </div>
    )
  }
}

export default Redux.connect()(Test)
