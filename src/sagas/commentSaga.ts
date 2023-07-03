import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put } from "redux-saga/effects";
import { getCommentsAll } from "../api/comments";
import { getCommentsSuccess } from "../store/slices/commentSlice";

export function* getCommentsSaga(action: PayloadAction<number>) {
  const id = action.payload;
  try {
    yield delay(500);
    const { data } = yield call(getCommentsAll, id);

    yield put(getCommentsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
