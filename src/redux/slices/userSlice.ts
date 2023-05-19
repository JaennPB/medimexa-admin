import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  token: string | null;
  username: string | null;
  email: string | null;
}

const initialState: User = {
  token: null,
  username: null,
  email: null,
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
