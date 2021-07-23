import React from 'react'

import HeaderRight from './HeaderRight';
import BodyRight from './BodyRight';

const RightSide = ({ startingCountry, destinationCountry, quotePrice }) => {
  return (
    <div className="right-side">
      <HeaderRight 
        startingCountry={startingCountry}
        destinationCountry={destinationCountry}
      />
      <BodyRight quotePrice={quotePrice} />
    </div>
  )
};

export default RightSide;
