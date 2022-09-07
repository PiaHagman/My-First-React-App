import { useState, useEffect } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  useEffect(() => {
    //The Effect Hook, just like the name implies,
    //carries out an effect each time there is a state change.
    //By default, it runs after the first render and every time the state is updated.
    console.log(`You have clicked the first button ${count} times.`);
  }, [count]); //When we leave the array empty, the effect will only run once irrespective of the changes to the state it is attached to.

  useEffect(() => {
    console.log(`You have clicked the second button ${count2} times`);
  }, [count2]);

  return (
    <div className="component-frame">
      <p>{`${count}`}</p>
      <button className="my-button" onClick={() => setCount(count + 1)}>
        Räkna uppåt
      </button>
      <p>{`${count2}`}</p>
      <button className="my-button" onClick={() => setCount2(count2 - 1)}>
        Räkna nedåt
      </button>
    </div>
  );
};
export default Counter;
