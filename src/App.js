import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

import {
  TodoList,
  Home,
  Counter,
  Users,
  AccountMenu,
  ErrorPage,
  PageColor,
  Weather,
} from "./components";

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

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              name={name}
              setYourName={setName}
              nameIsSet={nameIsSet}
              showName={setNameIsSet}
              bgColor={backgroundColor}
            />
          }
        />
        <Route
          path="/counter"
          element={<Counter bgColor={backgroundColor} />}
        />
        <Route path="/users" element={<Users />} />
        <Route
          path="/todolist"
          element={<TodoList todos={todos} setTodos={setTodos} />}
        />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <PageColor bgColor={backgroundColor} setBgColor={setBackgroundColor} />
    </div>
  );
}

export default App;
