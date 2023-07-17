import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewPost, Post } from "../../types/types";

interface PostState {
  items: Post[];
  loading: boolean;
  update: boolean;
}

const initialState: PostState = {
  items: [],
  loading: false,
  update: false,
};

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
    deletePost: (state, action: PayloadAction<number>) => {
      action;
      state;
    },
    deletePostSuccess: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    createPost: (state, action: PayloadAction<NewPost>) => {
      state;
      action;
    },
    createPostSuccess: (state, action: PayloadAction<Post>) => {
      state.items.unshift(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      state.update = true;
      action;
    },
    updatePostSuccess: (state, action: PayloadAction<Post>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      state.update = false;
    },
  },
});

export const {
  getPostsSuccess,
  getPosts,
  deletePost,
  deletePostSuccess,
  createPost,
  createPostSuccess,
  updatePost,
  updatePostSuccess,
} = postsSlice.actions;
export default postsSlice.reducer;
