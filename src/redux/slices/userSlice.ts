import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  token: string | undefined;
  username: string;
  email: string;
}

const initialState: User = {
  token: undefined,
  username: "",
  email: "",
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
