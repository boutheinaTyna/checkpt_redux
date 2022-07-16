import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    task: sliceReducer
  }
});
   


