import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { NewPost, Post } from "../../types";
import { getPostsApi, deletePostApi } from "../../api/posts";
import { Status } from "../../enums";

interface PostState {
  items: Post[];
  status: Status;
  update: boolean;
  error: boolean;
}

const initialState: PostState = {
  items: [],
  update: false,
  status: Status.LOADING,
  error: false,
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

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
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
      });
  },
});

export const {
  deletePostSuccess,
  createPost,
  createPostSuccess,
  updatePost,
  updatePostSuccess,
} = postsSlice.actions;

export default postsSlice.reducer;
