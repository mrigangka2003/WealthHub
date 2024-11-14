import React from 'react'

interface ReusableIenputProps{
    label ? :string ,
    type:string,
    name:string,
    placeholder?:string,
    value :string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void ,
    error?:string;
}

const Input = ({label,type='text',name,placeholder,value,onChange,error}:ReusableIenputProps) => {
  return (
    <div>
        <input type="text" />
    </div>
  )
}

export default Input