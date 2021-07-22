import React from 'react'

const HeaderRight = ({ startingCountry, destinationCountry }) => {
  console.log(startingCountry);
  return (
    <div className="header-right-container">
      <p className="header-right-text">{startingCountry}-{destinationCountry}</p>
    </div>
  )
};

export default HeaderRight;