import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { removeCombineState } from "./actions";

const removeSlice = createSlice({
  name: "remove",
  initialState: [3, 4, 4, 4, 4],
  reducers: {
    removeCombineStates: (state, action) => {
      return []; // if u dont have any specific initialstate u can simply write like this it will automatcially change the state
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeCombineState, (state, action) => {
      return [];
    });
  },
});

export const { removeCombineStates } = removeSlice.actions;

export default removeSlice.reducer;
