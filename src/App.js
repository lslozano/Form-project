import React, { useState } from 'react';

import './App.css';

import Form from './components/Form/index';
import Quote from './components/Quote/index';

const App = () => {
  const [quoteData, setQuoteData] = useState({
    startingCountry: '',
    destinationCountry: '',
    quotePrice: '',    
    shippingChannel: 'Ocean',
  });

  const [formHasBeenSubmitted, setFormHasBeenSubitted] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Form setQuoteData={setQuoteData} setFormHasBeenSubitted={setFormHasBeenSubitted} />
        {formHasBeenSubmitted &&
          <Quote />
        }
      </header>
    </div>
  );
}

export default App;
