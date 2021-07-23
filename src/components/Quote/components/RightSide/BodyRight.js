import React from 'react'

const BodyRight = ({ quotePrice }) => {

  const priceWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const price = priceWithCommas(quotePrice);

  return (
    <div className="body-right-container">
      <p className="body-right-text">US$ {price}</p>
    </div>
  )
};

export default BodyRight;
