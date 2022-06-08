import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { convertApi } from 'services/ConverterApi';
import convertersSlice from './convertersSlice';
// ...

export const store = configureStore({
  reducer: {
    converters: convertersSlice,
    [convertApi.reducerPath]: convertApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(convertApi.middleware)
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
