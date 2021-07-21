import './App.css';

import Form from './components/Form/index';
import Quote from './components/Quote/index';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Quote />
      </header>
    </div>
  );
}

export default App;
