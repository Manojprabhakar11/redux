import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/CounterSlice";
import removeSlice from "../feature/removeSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    removeSlice: removeSlice,
  },
});
