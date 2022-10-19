import React from 'react'

function FormInput({ name, label, value, handler }) {
  return (
    <div className='input'>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} onChange={handler} value={value} required />
    </div>
  )
}

export default FormInput