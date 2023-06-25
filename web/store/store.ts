import { configureStore } from '@reduxjs/toolkit';
import { collegeApi } from '@/store/college/college-api';
import { myCollegesApi } from './my-college/my-college-api';
import { userApi } from '@/store/user/user-api';
import { adminApi } from './admin/auth-api';

export const store = configureStore({
  reducer: {
    [adminApi.reducerPath]: adminApi.reducer,
    [collegeApi.reducerPath]: collegeApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [myCollegesApi.reducerPath]: myCollegesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(collegeApi.middleware, userApi.middleware,myCollegesApi.middleware),
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch