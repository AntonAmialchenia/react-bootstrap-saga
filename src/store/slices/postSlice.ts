import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types";
import { getPostsApi } from "../../api/posts";
import { Status } from "../../enums";

interface PostState {
  items: Post[];
  status: Status;
}

const initialState: PostState = {
  items: [],
  status: Status.LOADING,
};

export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPostsStatus",
  getPostsApi,
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export default postsSlice.reducer;
