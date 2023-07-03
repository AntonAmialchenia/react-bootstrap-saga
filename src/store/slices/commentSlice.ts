import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../types/types";

interface commentState {
  items: Comment[];
  loading: boolean;
}

const initialState: commentState = {
  items: [],
  loading: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    getCommentsByPostId: (state, action: PayloadAction<number>) => {
      action;
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
