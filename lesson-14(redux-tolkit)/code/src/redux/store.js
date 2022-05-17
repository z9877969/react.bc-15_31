// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
// import todosReducer from "./todos/todosReducer";
import todosReducer from "./todos/todosSlice";
import {
  configureStore,
  // combineReducers
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   todos: todosReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());

const persistTodosConfig = {
  key: "todo",
  version: 1,
  storage: storage,
  // blacklist: ["filter"],
  whitelist: ["items"],
};

const persistedTodosReducer = persistReducer(persistTodosConfig, todosReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: persistedTodosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
