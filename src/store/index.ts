import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/postSlice";
import comments from "./slices/commentSlice";
import user from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    posts,
    comments,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
