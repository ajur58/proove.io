var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-dom/test-utils')

import * as authActions from 'actions/authActions'
import {Login} from 'Login'

// {Todo} because of export default
// var {Todo} = require('Todo')

describe('Login', () => {
  it('should exist', () => {
    expect(Login).toExist()
  })
})
