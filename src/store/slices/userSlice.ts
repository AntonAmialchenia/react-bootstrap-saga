import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/types";

interface UserState {
  user: User;
  loading: boolean;
}

const initialState: UserState = {
  user: {} as User,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<number>) => {
      action;
      state.loading = true;
    },
    getUserSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
    },
  },
});

export const { getUser, getUserSuccess } = userSlice.actions;
export default userSlice.reducer;
