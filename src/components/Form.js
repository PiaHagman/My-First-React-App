import { useState } from "react";
import "../App.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [nameIsSet, setNameIsSet] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setName(event.target.value);
      setNameIsSet(true);
    }
  }

  return (
    <div className="component-frame" style={{ border: `0px white solid` }}>
      {nameIsSet ? (
        <div className="name-form" style={{ border: `0px white solid` }}>
          <p>{`${props.message} ${name}!`}</p>
        </div>
      ) : (
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} //Whenever there is a change, an anonymous function (which takes in the event object as a parameter) is fired which in turn calls the setName() function to update the name variable with the current value of the input field.
            onKeyDown={(event) => handleKeyDown(event)}
            placeholder="Skriv in ditt namn"
          />
        </form>
      )}
    </div>
  );
};

export default Form;
