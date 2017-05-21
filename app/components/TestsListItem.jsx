import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import moment from 'moment'
import {Button, Card, Icon, Modal, Header} from 'semantic-ui-react'

import {startDeleteTest} from 'actions/testActions'

class TestsListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  render () {
    var renderDate = () => {
      return moment.unix(createdAt).format('MMM Do YYYY @ h:mm a')
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

      return <Icon name={iconName} size='large' />
    }

    var {id, dispatch, title, hypotheses, createdAt, platform} = this.props

    const trashCanStyle = {
      float: 'right'
    }

    const ModalDelete = () => (
      <Modal open={this.state.modalOpen} basic size='small' closeOnDimmerClick closeOnDocumentClick>
        <Header icon='trash' content='Delete test' />
        <Modal.Content>
          <p>Are you sure you want to delete <i>{title}</i>?
          <br />
          You will not be able to recover the test.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic inverted onClick={() => this.setState({modalOpen: false})}>
            Cancel
          </Button>
          <Button color='red' inverted onClick={() => dispatch(startDeleteTest(id))}>
            <Icon name='trash' /> Yes, I want to delete the test
          </Button>
        </Modal.Actions>
      </Modal>
    )

    return (
      <Card key={id}>
        <Card.Content>
          <Icon name='trash' size='large' color='grey' style={trashCanStyle}
            onClick={() => this.setState({modalOpen: true})} />
          {ModalDelete()}
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Meta>
            {renderDate()} <br />
            Platform: {renderPlatform(platform)}
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
