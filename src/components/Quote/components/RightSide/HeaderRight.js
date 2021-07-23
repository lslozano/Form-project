import React from 'react'

const HeaderRight = ({ startingCountry, destinationCountry }) => {
  return (
    <div className="header-right-container">
      <p className="header-right-text">{startingCountry}-{destinationCountry}</p>
    </div>
  )
};

export default HeaderRight;