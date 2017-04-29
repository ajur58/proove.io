import React from 'react'
import { Provider } from 'react-redux'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'

import Main from 'Main'
import Login from 'Login'

export class Root extends React.Component {
  render () {
    const { store } = this.props
    const history = createHistory()

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        store.getState().auth.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
      )} />
    )

    // opposite of PrivateRoute aka 'redirect if logged in'
    const LoginRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={props => (
        store.getState().auth.isLoggedIn === true ? (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
        ) : (
          <Component {...props} />
        )
      )} />
    )

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <div>
              <Switch>
                <LoginRoute exact path='/login' component={Login} />
                <PrivateRoute path='/' component={Main} />
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

// const mapStateToProps = (state) => { auth: state.auth }
export default Root
