import { useState } from "react";

function FormInput({ name, label, value, handler }) {
  const [error, setError] = useState(false);

  const regex = {
    name: /^([ \u00c0-\u01ffa-zA-Z'-]){1,50}$/,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    phone: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
  }

  const message = {
    name: 'Inserta un nombre válido',
    email: 'Inserta un correo electrónico válido',
    phone: 'Inserta un teléfono válido'
  }

  function handleOnBlur() {
    regex[name].test(value) ? setError(false) : setError(true)
  }

  function handleOnFocus() {
    setError(false)
  }

  return (
    <div className='input'>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        name={name}
        onChange={handler}
        value={value}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        required
      />
      {error && <span style={{ color: 'red', marginLeft: 'auto', marginRight: '0' }}>{message[name]}</span>}
    </div >
  )
}

export default FormInput