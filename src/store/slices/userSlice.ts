import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/types";
import { call, delay, put } from "redux-saga/effects";
import { getUserApi } from "../../api/user";

interface UserState {
  user: User;
  loading: boolean;
}

const initialState: UserState = {
  user: {} as User,
  loading: false,
};

export function* getUserSaga(action: PayloadAction<number>) {
  const id = action.payload;
  try {
    yield delay(500);
    const { data } = yield call(getUserApi, id);

    yield put(getUserSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<number>) => {
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
