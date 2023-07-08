import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
import { Status } from "../../enums";
import { getUserApi } from "../../api/user";

interface UserState {
  user: User;
  status: Status;
}

const initialState: UserState = {
  user: {} as User,
  status: Status.LOADING,
};

export const fetchUser = createAsyncThunk<User, number>(
  "user/fetchUserStatus",
  getUserApi,
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = Status.LOADING;
        state.user = {} as User;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = Status.ERROR;
        state.user = {} as User;
      });
  },
});

export default userSlice.reducer;
