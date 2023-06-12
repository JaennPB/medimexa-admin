import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  token: string | null;
  email: string | null;
}

const initialState: User = {
  token: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
    },
    signOut:(state)=>{
      state.token = null;
      state.email = null;
    }
  },
});

export const { addUser, signOut } = userSlice.actions;
export default userSlice.reducer;
