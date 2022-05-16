import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import todosReducer from "./todos/todosReducer";

// const action = {
//   type: "addTodo",
//   payload: { id: 21, title: "Todo 21" },
// };

// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case "addTodo":
//       return { ...state, todo: action.payload };
//     default:
//       return state;
//   }
// };

const reducerA = (state = 0, action) => state;

const reducerB = (state = [], action) => state;

const reducerC = (state = false, action) => state;

const rootReducer = combineReducers({
  a: reducerA,
  b: reducerB,
  c: reducerC,
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(
  rootReducer,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools()
);

// {
//     a: 0,
//     b: [],
//     c: false
// }
