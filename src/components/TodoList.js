import React from "react";
import { useUnit } from "effector-react";
import { tasksStore } from "../stores";
import { todoToggled, todoRemoved } from "../events"; //The events can be trigged from anywhere on the code

export const TodoList = () => {
  const task = useUnit(tasksStore); //Here it get the actual state from the store. It can be called from anywhere on the code.

  return (
    <div >
      {task.map((todo, idx) => (
        <div key={idx} className={`Task${todo.completed ? " -completed" : ""}`}>
          <input
            type="Checkbox"
            value={todo.completed}
            onChange={() => todoToggled(idx)}
            className="Checkbox"
          />
          <span>{todo.text}</span>
          <button className="RemoveButton" onClick={() => todoRemoved(idx)}>X</button>
        </div>
      ))}
    </div>
  );
};
