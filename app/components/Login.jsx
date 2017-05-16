import React from 'react'
import {connect} from 'react-redux'
import { Button, Column, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

import {startLogin} from 'actions/authActions'

export class Login extends React.Component {
  componentDidUpdate () {
    if (this.props.isLoggedIn === true) {
      const {history} = this.props
      history.push('/')
    }
  }
  onGHLogin () {
    var {dispatch} = this.props
    dispatch(startLogin('github'))
  }
  onFBLogin () {
    var {dispatch} = this.props
    dispatch(startLogin('facebook'))
  }
  render () { // ES6 shortcut
    return (
      <Grid columns='1' verticalAlign='middle' centered>
        <Grid.Column>
          <Header as='h2' textAlign='center'>
            proove.io
          </Header>
          <Form>
            <Segment raised>
              <Button color='facebook' size='large' fluid onClick={this.onFBLogin.bind(this)}>
                <Icon name='facebook' /> Facebook auth
              </Button>
              <Button color='black' size='large' fluid onClick={this.onGHLogin.bind(this)}>
                <Icon name='github' /> Github auth
              </Button>
            </Segment>

            <div className='ui error message' />
          </Form>
          <Message>
            Need an invite? <a href='#'>Request here</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps (state, ownProps) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Login)
