import React from 'react'

const BodyLeft = ({ shippingChannel }) => {
  let deliveryStartRange;
  let deliveryEndRange;

  if (shippingChannel === 'Air') {
    const minimumDaysForStartRange = Math.ceil(3);
    const maximumDaysForStartRange = Math.floor(7);

    const minimumDaysForEndRange = Math.ceil(2);
    const maximumDaysForEndRange = Math.ceil(4);

    const daysToAddToStartRange = Math.floor(Math.random() * (maximumDaysForEndRange - minimumDaysForEndRange + 1) + minimumDaysForEndRange);

    deliveryStartRange = Math.floor(Math.random() * (maximumDaysForStartRange - minimumDaysForStartRange + 1) + minimumDaysForStartRange);
    deliveryEndRange = deliveryStartRange + daysToAddToStartRange;
  } else if (shippingChannel === 'Ocean') {
    const minimumDaysForStartRange = Math.ceil(25);
    const maximumDaysForStartRange = Math.floor(30);

    const minimumDaysForEndRange = Math.ceil(5);
    const maximumDaysForEndRange = Math.ceil(10);

    const daysToAddToStartRange = Math.floor(Math.random() * (maximumDaysForEndRange - minimumDaysForEndRange + 1) + minimumDaysForEndRange);

    deliveryStartRange = Math.floor(Math.random() * (maximumDaysForStartRange - minimumDaysForStartRange + 1) + minimumDaysForStartRange);
    deliveryEndRange = deliveryStartRange + daysToAddToStartRange;
  }

  return (
    <div className="body-left-container">
      <h6 className="body-left-header">{deliveryStartRange}-{deliveryEndRange} days</h6>
      <section className="body-left-section">
        <p className="body-left-text">Estimated delivery</p>
        <p className="body-left-date">Sept 20 - Sept 26</p>
      </section>
    </div>
  )
};

export default BodyLeft;