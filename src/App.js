import { useState } from 'react';
import './App.css';
import Keypad from './Keypad';

function App() {
  let [input,setInput] = useState("");

  function handleClick(value){
    setInput(input+value)
  }

  function calculate() {
  if (!input) {
    return; // Do nothing if input is empty
  }

  try {
    const output = eval(input);
    setInput(output.toString());
  } catch (error) {
    setInput("Error"); // Handle invalid expressions
  }
}

  function handleClear(){
    setInput("")
  }

  return (
    <div className='container'>
      <h1>Calculator App</h1>
      <div className='calculator'>
        <input type='text' className='output' value={input}></input>
        <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>
      </div>
    </div>
  );
}

export default App;

