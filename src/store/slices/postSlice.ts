import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { getPostsApi } from "../../api/posts";
import { Post } from "../../types/types";

interface PostState {
  items: Post[];
}

const initialState: PostState = {
  items: [],
};

export function* getPostsSaga() {
  const { data } = yield call(getPostsApi);

  yield put(getPostsSuccess(data));
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.items = action.payload;
    },
  },
});

export const GET_POSTS = "posts/getPosts";
export const getPosts = createAction(GET_POSTS);

export const { getPostsSuccess } = postsSlice.actions;
export default postsSlice.reducer;
