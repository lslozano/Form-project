import React from 'react'
import './styles/index.css';

import Input from './components/Input';
import Select from './components/Select';
import Button from './components/Button';

const Form = () => {
  return (
    <form onSubmit={console.log('The submit was done.')} className="form">
      <Input 
        className="input"
        label="startingCountry"
        type="text"
        name="startingCountry"
        value="China"
      />
      <Input
        className="input" 
        label="destinationCountry"
        type="text"
        name="destinationCountry"
        value="USA"
      />
      <Input
        className="input" 
        label="quotePrice"
        type="number"
        name="quotePrice"   
        value={500_000}
      />
      <Select 
        className="select"
      />
      <Button />
    </form>
  )
}

export default Form;