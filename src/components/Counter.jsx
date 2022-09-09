import { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  return (
    <div className="component-frame">
      <h1 className="component-heading">Counter</h1>
      <p>
        This might be the most redundant components in this page. It really doesn't do anything necessary.. But it was quite fun to construct.
      </p>
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
