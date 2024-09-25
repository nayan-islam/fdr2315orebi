import React from 'react'

const Input = ({className, id, LAbelText,type,placeholder, value10, onChange, children}) => {
  return (
    <div className={`border-b relative ${className}`}>
        <label htmlFor={id} className='font-bold cursor-pointer'> {LAbelText}</label>
        <input onChange={onChange} type={type} id={id} value={value10} className='block w-full pb-4 mt-4 outline-none' placeholder={placeholder} />
        {children}
    </div>
  )
}

export default Input