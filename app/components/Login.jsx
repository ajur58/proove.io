import React from 'react'
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

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
        <Grid.Column mobile={14} tablet={10} computer={7} >
          <Header as='h1' textAlign='center'>
            proove.io
          </Header>
          <Form>
            <Segment raised padded='very'>
              <Button color='facebook' size='large' fluid onClick={this.onFBLogin.bind(this)}>
                <Icon name='facebook' /> Facebook auth
              </Button>
              <br /><br />
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
