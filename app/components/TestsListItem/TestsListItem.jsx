import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {Button, Card, Icon, Dropdown} from 'semantic-ui-react';

import {startMarkTestCompleted} from 'actions/testActions';
import DeleteTestModal from './DeleteTestModal';
import classes from './testsListItem.scss';

class TestsListItem extends React.Component {

  render () {
    let renderDate = () => {
      return moment.unix(createdAt).format('MMM Do YYYY @ h:mm a');
    };
    let renderPlatform = (platform) => {
      let iconName = 'laptop';
      switch (platform) {
        case 'ios':
          iconName = 'iOS';
          break;
        case 'android':
          iconName = 'Android';
          break;
        case 'web':
        default:
          iconName = 'Web';
      }

      return <span>{iconName}</span>;
    };

    let toggleTestCompleted = () => {
      this.props.dispatch(
        startMarkTestCompleted(this.props.id, !this.props.completed)
      );
    };

    const trigger = (
      <Icon name='ellipsis vertical' size='large' />
    );

    const DropdownMenu = () => (
      <Dropdown trigger={trigger} icon={null} className={classes.moreButton}>
        <Dropdown.Menu>
          <Dropdown.Item onClick={toggleTestCompleted.bind(this)}>
            {!completed &&
              <div>
                <Icon name='checkmark box' size='large' color='grey' />
                Mark as Done
              </div>
            }
            {completed &&
              <div>
                <Icon name='square outline' size='large' color='grey' />
                Mark as Open
              </div>
            }
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name='clone' size='large' color='grey' />
            Clone
          </Dropdown.Item>
          <Dropdown.Item><DeleteTestModal testId={id} title={title} /></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );

    var {id, title, hypotheses, createdAt, platform, completed} = this.props;

    return (
      <Card key={id}>
        <Card.Content>
          {DropdownMenu()}
          <Card.Header>
            <span>{title} on {renderPlatform(platform)}</span>
          </Card.Header>
          <Card.Meta>
            {renderDate()}
          </Card.Meta>
          <Card.Description>
            {hypotheses}
            <br />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button as={Link} primary to={`/get-approoved/${id}`}>
              <Icon name='pencil' /> Edit
            </Button>
            <Button as={Link} basic to={`/view/${id}`}>View</Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default connect()(TestsListItem);
