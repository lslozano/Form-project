import React from 'react'

const InputField = ({ label, type, name, setInputValue, value }) => {
  const labelsOptions = {
    startingCountry: "Starting country",
    destinationCountry: "Destination country",
    quotePrice: "Quote price",
  };

  const placeholderText = {
    text: "Only letters and spaces",
    number: "Only numbers",
  };

  const resetValue = () => {
    setTimeout(() => setInputValue(''), 1000);
  }

  const handleChange = (event) => {

    const { value } = event.target;
    const containsOnlyLettersAndSpaces = /^[a-zA-Z\s]*$/;

    if (label !== 'quotePrice') {      
      if (!containsOnlyLettersAndSpaces.test(value)) {
        resetValue();
      } else {
        setInputValue(value);
      }
    } else if (label === 'quotePrice'){
      setInputValue(value);
    }
  };

  return (
    <div className="input-field">
      <label className="label" htmlFor={label}>{labelsOptions[label]}</label>
      <input 
        className="input"
        type={type} 
        name={name} 
        onChange={handleChange}
        value={value} 
        placeholder={placeholderText[type]}  
      />
    </div>
  )
};

export default InputField;