import React from 'react'

const InputField = ({ name, value }) => {
  return (
    <input type="text" name={name} value={value} />
  )
}

export default InputField;