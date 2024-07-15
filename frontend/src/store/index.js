import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './Authentication';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default store;
