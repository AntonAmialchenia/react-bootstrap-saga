import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NewPost, Post } from "../../types";
import {
  getPostsApi,
  deletePostApi,
  createPostApi,
  updatePostApi,
} from "../../api/posts";
import { Status } from "../../enums";

interface PostState {
  items: Post[];
  status: Status;
  update: boolean;
  error: boolean;
  disabled: boolean;
}

const initialState: PostState = {
  items: [],
  update: false,
  status: Status.LOADING,
  error: false,
  disabled: false,
};

export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async function () {
    const { data } = await getPostsApi();
    return data;
  },
);

export const deletePost = createAsyncThunk<void, number>(
  "posts/deletePosts",
  async function (id, { dispatch }) {
    await deletePostApi(id);
    dispatch(deletePostSuccess(id));
  },
);

export const createPost = createAsyncThunk<Post, NewPost>(
  "posts/createPosts",
  async function (post) {
    const { data } = await createPostApi(post);
    return data;
  },
);

export const updatePost = createAsyncThunk<Post, Post>(
  "posts/updatePosts",
  async function (post) {
    const { data } = await updatePostApi(post);
    return data;
  },
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePostSuccess: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    onError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
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
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.error = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.error = true;
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.items.unshift(action.payload);
      })
      .addCase(createPost.rejected, (state) => {
        state.error = true;
      })
      .addCase(updatePost.pending, (state) => {
        state.update = true;
      })
      .addCase(updatePost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        );
        state.update = false;
        state.error = false;
        state.disabled = false;
      })
      .addCase(updatePost.rejected, (state) => {
        state.error = true;
        state.disabled = true;
      });
  },
});

export const { deletePostSuccess, onError } = postsSlice.actions;

export default postsSlice.reducer;
