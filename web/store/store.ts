import { configureStore } from '@reduxjs/toolkit';
import { collegeApi } from '@/store/college/college-api';

export const store = configureStore({
  reducer: {
    [collegeApi.reducerPath]: collegeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(collegeApi.middleware),
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch