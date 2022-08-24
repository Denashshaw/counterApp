import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addByValue: (state, action) => {
      state.value += parseInt(action.payload);
    }
  }
});

export const { increment, decrement, addByValue } = counterSlice.actions;

export default counterSlice.reducer;
