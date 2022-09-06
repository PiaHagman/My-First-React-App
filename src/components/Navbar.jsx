import React from 'react';
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/form">Form</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
    <li>
      <Link to="/todolist">Todo List</Link>
    </li>
  </div>
  );
}
export default Navbar;