export const addTodo = (todo) => ({
  type: "addTodo",
  payload: todo,
});

export const removeTodo = (id) => ({
  type: "removeTodo",
  payload: id,
});

export const changeFilter = (value) => ({
  type: "changeFilter",
  payload: value,
});
