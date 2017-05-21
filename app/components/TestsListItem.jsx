import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {Button, Card, Icon} from 'semantic-ui-react'

import DeleteTestModal from 'DeleteTestModal'

class TestsListItem extends React.Component {

  render () {
    var renderDate = () => {
      return moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')
    }
    var renderPlatform = (platform) => {
      var iconName = 'laptop'
      switch (platform) {
        case 'ios':
          iconName = 'iOS'
          break
        case 'android':
          iconName = 'Android'
          break
        case 'web':
        default:
          iconName = 'Web'
      }

      return <span>{iconName}</span>
    }

    var {id, title, hypotheses, createdAt, platform} = this.props

    return (
      <Card key={id}>
        <Card.Content>
          <DeleteTestModal testId={id} title={title} />
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
    )
  }
}

export default connect()(TestsListItem)
