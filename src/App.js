import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import {
  TodoList,
  Form,
  Counter,
  Users,
  AccountMenu,
  ErrorPage,
} from "./components/";

function App() {
  const [nameIsSet, setNameIsSet] = useState(false);
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <div className="header">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <AccountMenu />
      </div>
      <div className="App-intro">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Form
                name={name}
                setYourName={setName}
                nameIsSet={nameIsSet}
                showName={setNameIsSet}
              />
            }
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
          <Route path="/form" element={<Form />} />
          <Route
            path="/todolist"
            element={<TodoList todos={todos} setTodos={setTodos} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
