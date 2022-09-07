import { useState } from "react";
import "../App.css";

const Form = ({ showName, nameIsSet, name, setYourName }) => {
  /* const [name, setName] = useState(""); */
  /* const [nameIsSet, setNameIsSet] = useState(false); */

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setYourName(event.target.value);
      showName();
    }
  }

  return (
    <div className="component-frame" style={{ border: `0px white solid` }}>
      {nameIsSet ? (
        <div style={{ border: `0px white solid` }}>
          <p className="name-form">{`Nice to have you here ${name}!`}</p>
          <p>
            This is my first SPA built in React and it doesn't really fill any
            purpose. Please navigate around to see different examples of react
            components that I have built. Enjoy!{" "}
          </p>
        </div>
      ) : (
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setYourName(e.target.value)} //Whenever there is a change, an anonymous function (which takes in the event object as a parameter) is fired which in turn calls the setName() function to update the name variable with the current value of the input field.
            onKeyDown={(event) => handleKeyDown(event)}
            placeholder="Type your name"
          />
        </form>
      )}
    </div>
  );
};

export default Form;
