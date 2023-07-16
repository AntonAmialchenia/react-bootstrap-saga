import { call, delay, put } from "redux-saga/effects";
import {
  createPostApi,
  deletePostApi,
  getPostsApi,
  updatePostApi,
} from "../api/posts";
import {
  createPostSuccess,
  deletePostSuccess,
  getPostsSuccess,
  updatePostSuccess,
} from "../store/slices/postSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { NewPost, Post } from "../types/types";

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

export function* createPostsSaga(action: PayloadAction<NewPost>) {
  const post = action.payload;
  try {
    const { data } = yield call(createPostApi, post);
    console.log(data);

    yield put(createPostSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* updatePostsSaga(action: PayloadAction<Post>) {
  const post = action.payload;
  try {
    yield delay(500);
    const { data } = yield call(updatePostApi, post);

    yield put(updatePostSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
