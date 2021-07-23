import React from 'react'

const Select = ({ setSelectValue, value }) => {

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectValue(value);
  }

  return (
    <div className="select-field">
      <label className="label" htmlFor='shippingChannel'>Shipping channel</label>
      <select name='shippingChannel' onChange={handleChange} value={value}>
        <option value='Ocean'>Ocean</option>
        <option value='Air'>Air</option>
      </select>
    </div>
  )
};

export default Select;