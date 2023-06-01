import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { removeCombineState } from "./actions";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    array: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.array.push((state.value += 1));
    },
    decrement: (state) => {
      state.value -= 1;
      state.array.push((state.value -= 1));
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeCombineState, (state, action) => {
      state.array = [];
    });
  }, // this extraReducers (used like combiner where u can change states by calling one function in any one slice) will automatically called when "remove/removeCombineState" remove is name of slice removeCombineState is func that is called
  // then redux matches using "addcase" and do the action we given
  // "remove/removeCombineState" instead of this u can call the slice like this removeslice.actions.removeCombineState.toString() this also gives remove/removeCombineState as result
});

export const { increment, decrement, incrementByAmount } = CounterSlice.actions;

export default CounterSlice.reducer;
