var expect = require('expect')
var df = require('deep-freeze-strict')

var reducers = require('reducers/authReducer')

describe('authReducer', () => {
  it('should set uid on LOGIN', () => {
    const action = {
      type: 'LOGIN',
      user: {
        uid: 123
      }
    }
    const res = reducers.authReducer(undefined, df(action))

    expect(res).toInclude(action.user)
    expect(res).toInclude({isLoggedIn: true})
  })

  it('should unset uid on LOGOUT', () => {
    const authData = {
      uid: '123abc'
    }
    const action = {
      type: 'LOGOUT'
    }
    const res = reducers.authReducer(df(authData), df(action))

    expect(res).toEqual({isLoggedIn: false})
  })
})
