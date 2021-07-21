import React from 'react'
import './styles/index.css';

import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'

const Quote = () => {
  return (
    <div className="quote">
      <LeftSide />
      <RightSide />
    </div>
  )
};

export default Quote;
