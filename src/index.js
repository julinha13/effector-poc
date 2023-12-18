import React from "react";
import ReactDOM from "react-dom";
import { TodoApp } from "./components/TodoApp";
import "./styles.css";

function App() {
  return (
    <div className="Container">
      <h1>
        Simple To Do List with
        <a href="https://effector.dev/" target="_blank" rel="noreferrer">
          Effector
        </a>
        ☄️
      </h1>
      <TodoApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
