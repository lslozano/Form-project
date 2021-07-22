import React, { useState } from 'react'
import './styles/index.css';

import Input from './components/Input';
import Select from './components/Select';
import Button from './components/Button';

const Form = () => {
  const [startingCountry, setStartingCountry] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [quotePrice, setQuotePrice] = useState('');
  const [shippingChannel, setShippingChannel] = useState('Ocean');

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Create quote');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      startingCountry !== '' &&
      destinationCountry !== '' &&
      quotePrice !== '' &&
      shippingChannel !== ''
    ) {
      console.log('Start:', startingCountry);
      console.log('Destiny:', destinationCountry);
      console.log('Quote:', quotePrice);
      console.log('Shipping:', shippingChannel);
    } else {
      setButtonText('Fill form');
      setIsButtonDisabled(true);
      setTimeout(() => {        
        setButtonText('Create quote');
        setIsButtonDisabled(false);
      }, 1000);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input 
        className="input"
        label="startingCountry"
        type="text"
        name="startingCountry"
        setInputValue={setStartingCountry}
        value={startingCountry}
      />
      <Input
        className="input" 
        label="destinationCountry"
        type="text"
        setInputValue={setDestinationCountry}
        value={destinationCountry}
      />
      <Input
        className="input" 
        label="quotePrice"
        type="number"
        name="quotePrice"  
        setInputValue={setQuotePrice} 
        value={quotePrice}
      />
      <Select 
        className="select"
        setSelectValue={setShippingChannel}
        value={shippingChannel}
      />
      <Button 
        text={buttonText}
        isDisabled={isButtonDisabled}
      />
    </form>
  )
};

export default Form;