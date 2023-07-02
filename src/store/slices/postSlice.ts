import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { call, delay, put } from "redux-saga/effects";
import { getPostsApi } from "../../api/posts";
import { Post } from "../../types/types";

interface PostState {
  items: Post[];
  loading: boolean;
}

const initialState: PostState = {
  items: [],
  loading: false,
};

export function* getPostsSaga() {
  try {
    yield delay(500);
    const { data } = yield call(getPostsApi);

    yield put(getPostsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.items = action.payload;
      state.loading = false;
    },
  },
});

export const { getPostsSuccess, getPosts } = postsSlice.actions;
export default postsSlice.reducer;
