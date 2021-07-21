import React from 'react'

const InputField = ({ label, type, name, value }) => {
  const labelsOptions = {
    startingCountry: "Starting country",
    destinationCountry: "Destination country",
    quotePrice: "Quote price",
  };

  return (
    <div className="input-field">
      <label className="label" for={label}>{labelsOptions[label]}</label>
      <input className="input" type={type} name={name} value={value} />
    </div>
  )
}

export default InputField;