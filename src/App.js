import logo from "./logo.svg";
import "./App.css";
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
  return (
    <div className="app">
      <div className="header">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <AccountMenu />
      </div>

      {/* <Form message="Nice to have you here" /> */}
      <div className="App-intro">
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<Users />} />
          <Route path="/form" element={<Form />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
