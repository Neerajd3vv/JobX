import React from 'react'

function InputBox({ placeholder, type, className,  }) {
  return (
    <input type={type} placeholder={placeholder} className={className} />
  )
}

export default InputBox