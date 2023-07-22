import React from 'react'
import './input.scss';

function Input({label, ...rest}) { //..rest sisaya semua komponent input(value, onChangeState, placholder)
  return (
    <div className='input-wrapper'>
      <p className='label'>{label}</p>
      <input className='input' {...rest} />
    </div>
  )
}

export default Input;