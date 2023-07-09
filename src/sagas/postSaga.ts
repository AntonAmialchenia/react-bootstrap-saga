import { call, delay, put } from "redux-saga/effects";
import { deletePostApi, getPostsApi } from "../api/posts";
import { deletePostSuccess, getPostsSuccess } from "../store/slices/postSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getPostsSaga() {
  try {
    yield delay(500);
    const { data } = yield call(getPostsApi);

    yield put(getPostsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* deletePostsSaga(action: PayloadAction<number>) {
  const id = action.payload;
  try {
    yield call(deletePostApi, id);

    yield put(deletePostSuccess(id));
  } catch (error) {
    console.log(error);
  }
}
