
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './App.css';
const App = () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult(" ");
  }
  const backspace = () => {
    setResult(result.slice(0, -1));
  }
  const calcualte = () => {
    try {
      setResult(eval(result.toString()));
    } catch (err) {
      setResult("Error")
    }
  }

  return (
    <div>
      
      <div className="container">
        <form>
          <input type="text" value={result} />

        </form>
        <div className="numerics">
          <button className="special" onClick={clear} id="clear" >AC</button>
          <button className="special" onClick={backspace} id="backspace">Clear</button>
          <button className="special" name="/" onClick={handleClick} id="operators" >/</button>
          <button name="7" onClick={handleClick} >7</button>
          <button name="8" onClick={handleClick} >8</button>
          <button name="9" onClick={handleClick} >9</button>
          <button className="special" name="*" onClick={handleClick} id="operators" >*</button>
          <button name="4" onClick={handleClick} >4</button>
          <button name="5" onClick={handleClick} >5</button>
          <button name="6" onClick={handleClick} >6</button>
          <button className="special" name="-" onClick={handleClick} id="operators" >-</button>
          <button name="1" onClick={handleClick} >1</button>
          <button name="2" onClick={handleClick} >2</button>
          <button name="3" onClick={handleClick} >3</button>
          <button className="special" name="+" onClick={handleClick} id="operators" >+</button>
          <button name="0" onClick={handleClick} >0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className="special" onClick={calcualte} id="result" >=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
