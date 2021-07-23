import React from 'react'
import './styles/index.css';

import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'

const Quote = ({ 
  startingCountry,
  destinationCountry,
  quotePrice,
  shippingChannel,
}) => {
  return (
    <div className="quote">
      <LeftSide shippingChannel={shippingChannel} />
      <RightSide 
        startingCountry={startingCountry}
        destinationCountry={destinationCountry}
        quotePrice={quotePrice}
      />
    </div>
  )
};

export default Quote;
