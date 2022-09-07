import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import {
  TodoList,
  Form,
  Counter,
  Users,
  AccountMenu,
  ErrorPage,
  PageColor,
} from "./components/";

function App() {
  const [nameIsSet, setNameIsSet] = useState(false);
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("#282c34");

  const appStyle = {
    backgroundColor: `${backgroundColor}`,
    minHeight: "100vh",
  };
  return (
    <div className="app" style={appStyle}>
      <div className="header">
        <Tooltip title="Yes, this is me!">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </Tooltip>
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

      <footer>
        <PageColor
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
      </footer>
    </div>
  );
}

export default App;
