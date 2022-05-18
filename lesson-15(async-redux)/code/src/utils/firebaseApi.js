import axios from "axios";

// https://bc-15-31-default-rtdb.firebaseio.com/todos.json
axios.defaults.baseURL = "https://bc-15-31-default-rtdb.firebaseio.com";

const transformObjectData = (objData) =>
  Object.entries(objData).map(([id, data]) => ({ ...data, id }));

export const addTodoApi = (todo) => {
  return axios
    .post("/todos.json", todo)
    .then(({ data }) => ({ ...todo, id: data.name }));
};

export const getTodosApi = () => {
  return axios.get("/todos.json").then(({ data }) => transformObjectData(data));
};

export const removeTodoApi = (id) => {
  return axios.delete("/todos/" + id + ".json").then(() => id);
};
