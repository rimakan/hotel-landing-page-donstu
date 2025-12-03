import { configureStore, type ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, type Action } from 'redux';
import authSlice from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
});

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  return store;
};

export const store = makeStore();

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;
// Infer the type of `store`
export type AppStore = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
