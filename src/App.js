import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";

import {
  TodoList,
  InfinityList,
  Form,
  Counter,
  Users,
  AccountMenu,
  Navbar,
} from "./components/";

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        {/* <Navbar /> */}
        <AccountMenu />
      </div>
      {/* <div className="menu">
        <ul>
          <li>
            {" "}
            <Link to="/users">Users</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/form">Form</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/todolist">TodoList</Link>{" "}
          </li>
        </ul>
      </div> */}

      {/* <TodoList /> */}
      <Form message="Välkommen" />
      <div className="App-intro">
        <Routes>
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/todolist" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
