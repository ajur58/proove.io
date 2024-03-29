import React from 'react'
import {Form, Select, TextArea} from 'semantic-ui-react'

const showError = (error, touched, warning) => {
  return touched && ((error && true))
}

export const renderInput = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <Form.Input {...input}
    type={type}
    label={label}
    placeholder={placeholder}
    error={showError(error, touched, warning)} />
)

export const renderSelect = function ({ input, label, children, placeholder, options, handleOnChange, meta: { touched, error, warning } }) {
  // switch value to defaultValue, otherwise you can never change it
  const value = input.value
  delete input.value
  input.defaultValue = value

  return (
    <Form.Field>
      <label>{label}</label>
      <Select options={options} placeholder={placeholder} {...input}
        error={showError(error, touched, warning)} onChange={handleOnChange} />
    </Form.Field>
  )
}

export const renderTextarea = ({ input, label, placeholder, rows, meta: { touched, error, warning } }) => (
  <Form.Field error={showError(error, touched, warning)}>
    <label>{label}</label>
    <TextArea {...input}
      label={label}
      placeholder={placeholder}
    />
  </Form.Field>
)
