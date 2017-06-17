import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Icon} from 'semantic-ui-react'

export class StepsListItem extends React.Component {
  render () {
    var {description, match, slug, status, title} = this.props
    var showContinueButton = (status) => {
      if (status === 'active') {
        return <Link to={`${match.url}/${slug}`} className='ui button primary'>Continue</Link>
      }
    }
    var showEditButton = (status) => {
      if (status === 'done') {
        return <Link to={`${match.url}/${slug}`} className=''>Edit</Link>
      }
    }

    var showCheckedIcon = (status) => {
      if (status === 'done') {
        return <Icon className='checked-icon' name='check circle' size='big' />
      }
    }
    return (
      <Grid className='step'>
        <Grid.Column width={13}>
          <h3>{title}</h3> {showEditButton(status)}
          <p>{description}</p>
          {showContinueButton(status)}
        </Grid.Column>
        <Grid.Column width='3'>
          {showCheckedIcon(status)}
        </Grid.Column>
      </Grid>
    )
  }
}

export default StepsListItem
