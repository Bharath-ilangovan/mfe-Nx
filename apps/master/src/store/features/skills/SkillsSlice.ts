import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MasterDataRootState } from '../../store';
import { getAllSKills } from './SkillsAPI';
import { SetStateAction } from 'react';
import { IGetSKills, ISkills } from '../../../types/skills';

const initialState: ISkills = {
  isLoading: false,
  isError: false,
  error: null,
  data: {
    getSkills: null,
  },
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState: initialState,
  reducers: {
    resetSkills: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSKills.pending, (state: ISkills) => {
        state.isLoading = true;
      })
      .addCase(
        getAllSKills.fulfilled,
        (state: ISkills, action: PayloadAction<IGetSKills[]>) => {
          state.isLoading = false;
          state.isError = false;
          state.error = null;
          state.data.getSkills = action.payload;
        }
      )
      .addCase(getAllSKills.rejected, (state: ISkills, action) => {
        state.isLoading = false;
        state.isError = true;
        // Type guard to check for a payload from rejectWithValue
        if (action.payload && typeof action.payload === 'string') {
          state.error = action.payload;
        } else {
          state.error = action.error.message || 'An unknown error occurred.';
        }
      });
  },
});

export const { resetSkills } = skillsSlice.actions;

export const selectSkills = (state: MasterDataRootState) => state.skills;

export default skillsSlice.reducer;
