import React from 'react'
import {connect} from 'react-redux'
import {Button, Header, Icon, Modal} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import {startDeleteTest} from 'actions/testActions'

class DeleteTestModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }
  open (e) {
    e.preventDefault()
    this.setState({ open: true })
  }
  close () {
    this.setState({ open: false })
  }
  render () {
    let {dispatch, testId, title} = this.props
    const trashCanStyle = {
      float: 'right'
    }
    return (
      <Modal open={this.state.open} basic size='small'
        trigger={
          <a onClick={this.open.bind(this)}>
            <Icon name='trash' size='large' color='grey' style={trashCanStyle} />
          </a>
        }>
        <Header icon='trash' content='Delete test' />
        <Modal.Content>
          <p>Are you sure you want to delete <i>{title}</i>?
          <br />
          You will not be able to recover the test.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic inverted onClick={() => this.close()}>
            Cancel
          </Button>
          <Button color='red' inverted onClick={() => dispatch(startDeleteTest(testId))}>
            <Icon name='trash' /> Yes, I want to delete the test
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

DeleteTestModal.propTypes = {
  testId: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool
}

export default connect()(DeleteTestModal)
