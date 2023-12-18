import { createStore } from "effector";

// Here it's create the stores and pass. The store can recieve any type data, with or without a initial state.
// The ideal is split into folders the store creation and the corresponding events, according to business or usage.
export const todoStore = createStore("");
export const tasksStore = createStore([
  { text: "Task store initial state", completed: false },
]);
