import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { takeEvery } from "redux-saga/effects";
import posts, { GET_POSTS, getPostsSaga } from "./slices/postSlice";
import comments, {
  getCommentsSaga,
  getCommentsByPostId,
} from "./slices/commentSlice";

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(getCommentsByPostId, getCommentsSaga);
}

export const store = configureStore({
  reducer: {
    posts,
    comments,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
