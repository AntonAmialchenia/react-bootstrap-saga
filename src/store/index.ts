import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/postSlice";
import user from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    posts,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
