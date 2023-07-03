import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import posts from "./slices/postSlice";
import comments from "./slices/commentSlice";
import user from "./slices/userSlice";
import { sagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    posts,
    comments,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
