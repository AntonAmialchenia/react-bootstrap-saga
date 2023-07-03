import { call, delay, put } from "redux-saga/effects";
import { getPostsApi } from "../api/posts";
import { getPostsSuccess } from "../store/slices/postSlice";

export function* getPostsSaga() {
  try {
    yield delay(500);
    const { data } = yield call(getPostsApi);

    yield put(getPostsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
