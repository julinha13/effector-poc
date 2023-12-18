import React from "react";
import { useUnit } from "effector-react";
import { todoStore } from "../stores";
import { inputChanged } from "../events"; //The events can be trigged from anywhere on the code

export const TodoInput = () => {
  const todo = useUnit(todoStore); ///Here it get the actual state from the store. It can be called from anywhere on the code.

  return (
    <input
      value={todo}
      onChange={evt => inputChanged(evt.target.value)}
      placeholder="'Learn about Effector complex features'..."
    />
  );
};
