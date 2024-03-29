import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
var expect = require('expect')

import firebase, {firebaseRef} from 'app/firebase/'
var actions = require('actions/authActions')

var createMockStore = configureMockStore([thunk])

describe('Actions', () => {
  describe('Auth tests', () => {
    it('should generate login action object', () => {
      const action = {
        type: 'LOGIN',
        user: '123abc'
      }
      const res = actions.login(action.user)

      expect(res).toEqual(action)
    })

    it('should generate logout action object', () => {
      const action = {
        type: 'LOGOUT'
      }
      const res = actions.logout()

      expect(res).toEqual(action)
    })
  })
})
