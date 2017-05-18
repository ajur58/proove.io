import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import moment from 'moment'
import {Button, Card, Icon} from 'semantic-ui-react'

import {startDeleteTest} from 'actions/testActions'

class TestsListItem extends React.Component {
  render () {
    var renderDate = () => {
      return 'Created at ' + moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')
    }
    var renderPlatform = (platform) => {
      var iconName = 'laptop'
      switch (platform) {
        case 'ios':
          iconName = 'apple'
          break
        case 'android':
          iconName = 'android'
          break
        case 'web':
        default:
          iconName = 'laptop'
      }

      return <Icon name={iconName} size='large' color='grey' />
    }

    var {id, dispatch, title, hypotheses, createdAt, platform} = this.props
    return (
      <Card centered key={id}>
        <Card.Content>
          <Card.Header>
            {title} {renderPlatform(platform)}
          </Card.Header>
          <Card.Meta>
            {renderDate()}
          </Card.Meta>
          <Card.Description>
            {hypotheses}
            <br />
            <a onClick={(e) => {
              e.preventDefault()
              dispatch(startDeleteTest(id))
            }}>
              <Icon name='trash' size='large' color='grey' />
            </a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button as='a' primary href={`/get-approoved/${id}`}>
              <Icon name='pencil' /> Continue
            </Button>
            <Button as='a' basic href={`/view/${id}`}>View Test</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default connect()(TestsListItem)
