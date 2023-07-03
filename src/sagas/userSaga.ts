import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put } from "redux-saga/effects";
import { getUserSuccess } from "../store/slices/userSlice";
import { getUserApi } from "../api/user";

export function* getUserSaga(action: PayloadAction<number>) {
  const id = action.payload;
  try {
    yield delay(500);
    const { data } = yield call(getUserApi, id);

    yield put(getUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
