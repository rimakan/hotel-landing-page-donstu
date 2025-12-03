import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  loggedState: string;
}

const createInitialState = (): AuthState => ({
  loggedState: window.localStorage.getItem('loggedState') || 'not-logged',
});

const authSlice = createSlice({
  name: 'hotel/authSlice',
  initialState: createInitialState(),
  reducers: {
    setLoggedState(state, action) {
      state.loggedState = action.payload;
      window.localStorage.setItem('loggedState', action.payload);
    },
  },
});

export default authSlice.reducer;
const { setLoggedState } = authSlice.actions;
export { setLoggedState };
