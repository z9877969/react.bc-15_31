import { configureStore } from "@reduxjs/toolkit";
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
import counterReducer from "./counter/counterReducer";
import todos from "./todos/todosSlice";
import auth from "./auth/authSlice";

const authPersistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["idToken"],
};

const authPersistedReducer = persistReducer(authPersistConfig, auth);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    counter: counterReducer,
    todos,
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
