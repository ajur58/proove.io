import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Icon} from 'semantic-ui-react';

export class StepsListItem extends React.Component {
  render () {
    var {description, match, slug, status, title} = this.props;
    var showContinueButton = (status) => {
      if (status === 'active') {
        return <Link to={`${match.url}/${slug}`} className='ui button primary'>Continue</Link>;
      }
    };
    var showEditButton = (status) => {
      if (status === 'done') {
        return (
          <Link to={`${match.url}/${slug}`} className=''>
            <Icon name='pencil' size='small' />
          </Link>
        );
      }
    };

    var showCheckedIcon = (status) => {
      if (status === 'done') {
        return <Icon className='checked-icon' name='check circle' size='big' />;
      }
    };
    return (
      <Grid.Row className='step'>
        <Grid.Column width={8}>
          <h3>{title} {showEditButton(status)}</h3>
          <p>{description}</p>
          {showContinueButton(status)}
        </Grid.Column>
        <Grid.Column width={4}>
          {showCheckedIcon(status)}
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default StepsListItem;
