import React from 'react'

const Button = ({ text, isDisabled }) => {
  return <button className="create-button" type="submit" disabled={isDisabled} value="Submit">{text}</button>
};

export default Button;