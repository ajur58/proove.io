import React from 'react'
import {Form, Select, TextArea} from 'semantic-ui-react'

const showError = (error, touched, warning) => {
  return touched && ((error && true))
}

export const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <Form.Input {...input}
    type={type}
    label={label}
    placeholder={placeholder}
    error={showError(error, touched, warning)} />
)

export const renderSelect = function ({ input, label, children, placeholder, options, meta: { touched, error, warning } }) {
  const value = input.value
  delete input.value
  input.defaultValue = value
  console.log(options)
  return (
    <Form.Field>
      <label>{label}</label>
      <Select options={options} placeholder={placeholder} {...input}
        error={showError(error, touched, warning)} />
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

export const renderFieldset = ({ input, label, children, meta: { touched, error, warning } }) => (
  <div>
    <fieldset className='fieldset'>
      <legend className='label-text'>{label}</legend>
      {children}
    </fieldset>
  </div>
)
