import { takeEvery } from "redux-saga/effects";
import { getPosts } from "../store/slices/postSlice";
import { getCommentsByPostId } from "../store/slices/commentSlice";
import { getUser } from "../store/slices/userSlice";
import { getPostsSaga } from "./postSaga";
import { getCommentsSaga } from "./commentSaga";
import { getUserSaga } from "./userSaga";

export function* sagas() {
  yield takeEvery(getPosts, getPostsSaga);
  yield takeEvery(getCommentsByPostId, getCommentsSaga);
  yield takeEvery(getUser, getUserSaga);
}
