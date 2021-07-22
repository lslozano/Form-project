import React from 'react'

const BodyRight = ({ quotePrice }) => {
  const price = quotePrice;

  return (
    <div className="body-right-container">
      <p className="body-right-text">US$ {price}</p>
    </div>
  )
};

export default BodyRight;
