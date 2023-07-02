import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
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
    const { data } = yield call(getCommentsAll, id);

    yield put(getCommentsSuccess(data));
  } catch (error) {
    console.log(error);
    // yield put(getCommentsFailed(error.message))
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
    },
    getCommentsFailed: (state) => {
      state.loading = false;
    },
  },
});

export const GET_COMMENTS = "comments/getComments";
export const getComments = createAction(GET_COMMENTS);

export const { getCommentsSuccess, getCommentsByPostId, getCommentsFailed } =
  commentsSlice.actions;
export default commentsSlice.reducer;
