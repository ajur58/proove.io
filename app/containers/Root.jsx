import React from 'react'
import * as Redux from 'react-redux'
import { Provider } from 'react-redux'
import {
  HashRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'

import Main from 'Main'
import Login from 'Login'

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => {
//     debugger
//     props.auth.isLoggedIn !== true ? (
//       <Component {...props} />
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }} />
//     )
//   }} />
// )

export default class Root extends React.Component {
  render () {
    const { store } = this.props
    const history = createHistory()

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <div>
              <Route exact path='/' component={Main} />
              <Route path='/login' component={Login} />
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

// export default Redux.connect(
//   (state) => {
//     return {
//       auth: state.auth
//     }
//   }
// )(Root)
