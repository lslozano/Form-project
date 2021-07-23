import React from 'react'

import HeaderLeft from './HeaderLeft'
import BodyLeft from './BodyLeft';

const LeftSide = ({ shippingChannel }) => {
  return (
    <div className="left-side">
      <HeaderLeft shippingChannel={shippingChannel} />
      <BodyLeft shippingChannel={shippingChannel} />
    </div>
  )
};

export default LeftSide;