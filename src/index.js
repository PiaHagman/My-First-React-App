import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {" "}
    {/* The main job of a <Router> component is to create a history object to keep track of the location (URL). When the location changes because of a navigation action, the child component (in this case <App>) is re-rendered. */}
    <App />
  </BrowserRouter>
);
