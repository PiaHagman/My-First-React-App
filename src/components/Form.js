import { useState } from "react";
import "../App.css";

const Form = (props) => {
  const [name, setName] = useState("");

  return (
    <div className="component-frame">
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} //Whenever there is a change, an anonymous function (which takes in the event object as a parameter) is fired which in turn calls the setName() function to update the name variable with the current value of the input field.
          placeholder="Skriv in ditt namn"
        />
        <p>{`${props.message}: ${name}`}</p>
      </form>
    </div>
  );
};

export default Form;
