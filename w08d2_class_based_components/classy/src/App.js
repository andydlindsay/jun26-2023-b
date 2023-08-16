import './App.css';
import {useState} from 'react';
import StateManagement from './components/StateManagement';

function App() {

  const [display, setDisplay] = useState(false);

  const checkboxHandler = () => {
    setDisplay(!display);
  };

  return (
    <div className="App">
      <h1>Awesome App Version 0.5</h1>
      <input type="checkbox" onClick={checkboxHandler}/>
      { display && <StateManagement customtext="this is VERY custom" /> }
    </div>
  );
}

export default App;
