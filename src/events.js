import { createEvent } from "effector";
import { todoStore, tasksStore } from "./stores";

//It can be create as many events events as necessary to update, add or remove data from store.
export const inputChanged = createEvent("Input changed");
export const todoAdded = createEvent("Todo added");
export const todoRemoved = createEvent("Todo removed");
export const todoToggled = createEvent("Todo toggled");
export const submitPressed = createEvent("Submit pressed");

//All the complex and business logic to manipulate a state from store can be done here at events.
todoStore.on(inputChanged, (state, value) => value).on(todoAdded, () => "");

tasksStore
  .on(todoAdded, (todos, text) => [...todos, { text, completed: false }])
  .on(todoRemoved, (todos, idx) => todos.filter((_, curIdx) => curIdx !== idx))
  .on(todoToggled, (todos, idx) => {
    return todos.map((todo, curIdx) => {
      if (curIdx === idx) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  });

submitPressed.watch((evt) => {
  evt.preventDefault();
  todoAdded(todoStore.getState());
});
