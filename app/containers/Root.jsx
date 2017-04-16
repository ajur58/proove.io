import React from 'react'
import { Provider } from 'react-redux'
import RTRouter from 'app/router/new'

export default class Root extends React.Component {
  render () {
    const { store, history } = this.props
    const { getState } = store
    return (
      <Provider store={store}>
        <div>
          <RTRouter history={history} getState={getState} />
        </div>
      </Provider>
    )
  }
}
