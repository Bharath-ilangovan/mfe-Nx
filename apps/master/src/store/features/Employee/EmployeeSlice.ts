import { createSlice } from "@reduxjs/toolkit";
import { MasterDataRootState } from "../../store";

interface IEmployee {
  counter: number;
}

const initialState: IEmployee = {
  counter: 0,
};
const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    incrementCount: (state) => {
      state.counter = state.counter + 1;
    },
    decrementCount: (state) => {
      state.counter = state.counter - 1;
    },
  },
  extraReducers: (builder) => {},
});

export const selectEmployee = (state: MasterDataRootState) => state.employee;

export const { incrementCount, decrementCount } = employeeSlice.actions;
export default employeeSlice.reducer;
