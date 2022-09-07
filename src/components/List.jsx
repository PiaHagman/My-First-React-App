import React, {  useEffect } from "react";
import "../App.css";

const TodoList = ({ todos, setTodos }) => {
  /* 
    useEffect(() => {
    setTodos([
      {
        content: "Köpa liten bil",
        isCompleted: false,
      },
      {
        content: "Handla hö och halm till Neville",
        isCompleted: false,
      },
      {
        content: "Presenter till Noah",
        isCompleted: true,
      },
    ]);
  },[]); */

  
  useEffect(() => {
    createTodoAtIndex(null, todos.length - 1);
  }, []);

  function handleKeyDown(event, index) {
    if (event.key === "Enter") {
      createTodoAtIndex(event, index);
    }
    if (event.key === "Backspace" && todos[index].content === "") {
      event.preventDefault();
      return removeTodoAtIndex(index);
    }
  }

  function removeTodoAtIndex(index) {
    if (index === 0 && todos.length === 1) return;
    setTodos((todos) =>
      todos.slice(0, index).concat(todos.slice(index + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[index - 1].focus();
    }, 0);
  }
  function createTodoAtIndex(event, index) {
    const newTodos = [...todos]; //Skapar en kopia av todos genom ...
    newTodos.splice(index + 1, 0, {
      //insert a new empty todo after the currently selected todo
      content: "",
      isCompleted: false,
    });
    setTodos(newTodos); //update the original todos array with the copy
    setTimeout(() => {
      document.forms[0].elements[index + 1].focus(); //set the focus to the new input field inside of a timeout that triggers after 0 milliseconds
    }, 0); //we add a timeout delay to the focus to wait for the state to finish updating before focusing on the newly rendered input
  }

  function updateTodoAtIndex(event, index) {
    //Input fields have an onChange event handler which is triggered whenever the value of that field changes. Be careful though, as the value itself is not provided from the change handler. Instead, an event object is given, which allows you to find the value through event.target.value.
    const newTodos = [...todos];
    newTodos[index].content = event.target.value;
    setTodos(newTodos);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }
  return(
    <form className="todo-list component-frame">
      <p className="component-heading">Write your own Todo's</p>
      <p>
        Be my guest and add your own todo's to this fancy list. You can also remove todo's and mark them as done. 
        Also note that they are saved when you navigate around the page. Do not refresh the page though, then you will have to start all over again. 
      </p>
        <ul>
          {todos.map((todo, index) => (
            <div key={`todo-${index}`} className={`todo ${todo.isCompleted && "todo-is-completed"}`}>
              <div
                className={"checkbox"}
                onClick={() => toggleTodoCompleteAtIndex(index)}
              >
                {todo.isCompleted && <span>&#x2714;</span>}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={(event) => handleKeyDown(event, index)}
                onChange={(event) => updateTodoAtIndex(event, index)}
              />
            </div>
          ))}
        </ul>
      </form>
  )
}

export default TodoList