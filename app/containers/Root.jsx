import React from 'react'
import { Provider } from 'react-redux'
import SmartRouter from 'app/router/index'

export default class Root extends React.Component {
  render () {
    const { store, history } = this.props
    const { getState } = store
    return (
      <Provider store={store}>
        <div>
          <SmartRouter history={history} getState={getState} />
        </div>
      </Provider>
    )
  }
}
