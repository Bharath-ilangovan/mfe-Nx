import { configureStore } from '@reduxjs/toolkit';
import { skillsSlice } from './features/skills/SkillsSlice';
import EmployeeSlice from './features/Employee/EmployeeSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const masterDataStore = configureStore({
  reducer: {
    skills: skillsSlice.reducer,
    employee: EmployeeSlice,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type MasterDataRootState = ReturnType<typeof masterDataStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type MasterDataAppDispatch = typeof masterDataStore.dispatch;

