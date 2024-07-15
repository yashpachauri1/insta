import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  isLoggedIn:false,
  token:null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user)
      state.error = null;
    },
    logIn:(state)=>{
      state.isLoggedIn = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
      state.isLoggedIn=false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn=false;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('username');
      localStorage.removeItem('id');
      localStorage.removeItem('profilePhoto')
    },
  },
});

export const { setUser, setError, clearError, logout, logIn } = authSlice.actions;



const AuthReducer = authSlice.reducer;

export default AuthReducer;
