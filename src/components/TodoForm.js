import React from "react";
import { submitPressed } from "../events"; //The events can be trigged from anywhere on the code
import { TodoInput } from "./TodoInput";

export const TodoForm = () => {
  return (
    <form className="Form" onSubmit={submitPressed}>
      <TodoInput />
      <button className="AddButton">Add Task</button>
    </form>
  );
};
