import React from 'react'

const HeaderLeft = ({ shippingChannel }) => {
  return (
    <div className="header-left-container">
      <p className="header-left">Traditional {shippingChannel.toLowerCase()} freight</p>
    </div>
  )
};

export default HeaderLeft;