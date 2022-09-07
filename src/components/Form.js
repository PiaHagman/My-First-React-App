import "../App.css";
//Refactoring: place boolean as object together with name
const Form = ({ showName, nameIsSet, name, setYourName }) => {
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setYourName(event.target.value);
      showName(true);
    }
  }

  return (
    <div className="component-frame" style={{ border: `0px white solid` }}>
      {nameIsSet ? (
        <div style={{ border: `0px white solid` }}>
          <p className="component-heading">{`Nice to have you here ${name}!`}</p>
          <p>
            This is my first SPA built in React and it doesn't really fill any
            purpose. Please navigate around to see different examples of react
            components that I have built. Enjoy!{" "}
          </p>
        </div>
      ) : (
        <form className="name-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setYourName(e.target.value)} //Whenever there is a change, an anonymous function (which takes in the event object as a parameter) is fired which in turn calls the setName() function to update the name variable with the current value of the input field.
            onKeyDown={(event) => handleKeyDown(event)}
            placeholder="Please begin by typing you name here..."
          />
        </form>
      )}
    </div>
  );
};

export default Form;
