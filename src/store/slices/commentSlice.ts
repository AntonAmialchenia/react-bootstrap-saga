import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { call, delay, put } from "redux-saga/effects";
import { getCommentsAll } from "../../api/comments";
import { Comment } from "../../types/types";

interface commentState {
  items: Comment[];
  loading: boolean;
}

const initialState: commentState = {
  items: [],
  loading: false,
};

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

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getCommentsByPostId: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    getCommentsSuccess: (state, action: PayloadAction<Comment[]>) => {
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export const { getCommentsSuccess, getCommentsByPostId } =
  commentsSlice.actions;
export default commentsSlice.reducer;
