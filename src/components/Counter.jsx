import { useState } from "react";
import "../App.css";

const Counter = (props) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [inputValue, setInputValue] = useState()
  
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setInputValue(parseFloat(e.target.value));
 }
  }
  

  return (
    <div className="component-frame">
      <h1 className="component-heading">Counter</h1>
      <p>
        This might be the most redundant component in this page. It really doesn't do anything remarkable.. But please, try it out!
      </p>
      <div className="align-center">
      <div className="counter" style={{backgroundColor:`${props.bgColor}`}}>
      <input
            className="counter-input-field"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(parseFloat(e.target.value))} //Whenever there is a change, an anonymous function (which takes in the event object as a parameter) is fired which in turn calls the setName() function to update the name variable with the current value of the input field.
            onKeyDown={(event) => handleKeyDown(event)}
            placeholder="Input number"
            style={{backgroundColor:`${props.bgColor}`}}
      />
      <div className="counter-buttons">
        <button className="my-button" onClick={() => setCurrentValue(currentValue + inputValue)}>
          + {inputValue}
        </button>
        <button className="my-button" onClick={() => setCurrentValue(currentValue - inputValue)}>
          - {inputValue}
        </button> 
      </div>
      <div>Summa:</div>
      <div className="counter-value">{currentValue}</div>
      </div>
      </div>
    </div>
  );
};
export default Counter;
