import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        {/*  <Router>
          <Navbar />

          <Routes>
            <Route path="/form" exact component={Form} />
            <Route path="/users" component={Users} />
            <Route path="/todolist" component={TodoList} />
          </Routes>
        </Router>

        <Navbar /> */}
        <img src={logo} className="logo" alt="logo" />
        <AccountMenu />
      </div>
      <TodoList />
      <Form message="Välkommen till denna sida" />
      <Counter />
      <Users />
      {/* <InfinityList /> */}
    </div>
  );
}

export default App;
