import React from 'react'

function InputBox({ placeholder, type, className, onChange, id , value , name}) {
  return (
    <input onChange={onChange} id={id} type={type} placeholder={placeholder} className={className} value={value} name={name}/>
  )
}

export default InputBox