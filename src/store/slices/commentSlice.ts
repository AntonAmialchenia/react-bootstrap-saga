import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../types";
import { Status } from "../../enums";
import { getCommentsApi } from "../../api/comments";

interface commentState {
  items: Comment[];
  status: Status;
}

const initialState: commentState = {
  items: [],
  status: Status.LOADING,
};

export const fetchComments = createAsyncThunk<Comment[], number>(
  "comments/fetchCommentsStatus",
  getCommentsApi,
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export default commentsSlice.reducer;
