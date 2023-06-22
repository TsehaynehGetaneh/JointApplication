import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/user';

// Define the initial state of the auth slice
interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

// Define the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Export the auth slice actions
export const { setUser, setToken, clearAuth } = authSlice.actions;

// Export a selector for getting the authenticated user
export const selectUser = (state: { auth: AuthState }) => state.auth.user;

// Export a selector for getting the auth token
export const selectToken = (state: { auth: AuthState }) => state.auth.token;

// Export the auth reducer
export default authSlice.reducer;