import React from 'react'

const Select = () => {
  return (
    <div className="select-field">
      <label className="label" for='shippingChannel'>Shipping channel</label>
      <select name='shippingChannel'>
        <option value='Ocean'>Ocean</option>
        <option value='Air'>Air</option>
      </select>
    </div>
  )
}

export default Select;