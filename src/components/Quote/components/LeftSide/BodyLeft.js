import React from 'react'

const BodyLeft = ({ shippingChannel }) => {
  let deliveryStartRange;
  let deliveryEndRange;

  const determineQuoteDayRanges = (shippingChannel) => {
    const minimumDaysForStartRange = shippingChannel === 'Air' ? Math.ceil(3) : Math.ceil(25);
    const maximumDaysForStartRange = shippingChannel === 'Air' ? Math.floor(7) : Math.ceil(30);

    const minimumDaysForEndRange = shippingChannel === 'Air' ? Math.ceil(2) : Math.ceil(5);
    const maximumDaysForEndRange = shippingChannel === 'Air' ? Math.ceil(4) : Math.ceil(10);

    const daysToAddToStartRange = Math.floor(Math.random() * (maximumDaysForEndRange - minimumDaysForEndRange + 1) + minimumDaysForEndRange);

    deliveryStartRange = Math.floor(Math.random() * (maximumDaysForStartRange - minimumDaysForStartRange + 1) + minimumDaysForStartRange);
    deliveryEndRange = deliveryStartRange + daysToAddToStartRange;
    
    return  `${deliveryStartRange}-${deliveryEndRange}`;
  }

  return (
    <div className="body-left-container">
      <h6 className="body-left-header">{determineQuoteDayRanges(shippingChannel)} days</h6>
      <section className="body-left-section">
        <p className="body-left-text">Estimated delivery</p>
        <p className="body-left-date">Sept 20 - Sept 26</p>
      </section>
    </div>
  )
};

export default BodyLeft;