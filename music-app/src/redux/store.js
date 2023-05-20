import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(api.middleware),
});
