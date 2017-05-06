import React from 'react'

const showError = (error, touched, warning) => {
  return touched && ((error && <span className='error'>{error}</span>) || (warning && <span>{warning}</span>))
}

export const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label} {showError(error, touched, warning)}</label>
    <div>
      <input {...input} type={type} placeholder={placeholder} />
    </div>
  </div>
)

export const renderSelect = ({ input, label, children, meta: { touched, error, warning } }) => (
  <div>
    <label>{label} {showError(error, touched, warning)}</label>
    <div>
      <select {...input}>
        {children}
      </select>
    </div>
  </div>
)

export const renderTextarea = ({ input, label, placeholder, type, rows, meta: { touched, error, warning } }) => (
  <div>
    <label>{label} {showError(error, touched, warning)}</label>
    <div>
      <textarea {...input} type={type} placeholder={placeholder} rows={rows} />
    </div>
  </div>
)
