// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./Reducer";
// // import { persistStore, persistReducer } from "redux-persist";
// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./Reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
