import { configureStore } from "@reduxjs/toolkit";
import listclassReducer from "../features/listclass/listclassSlice";

export const store = configureStore({
  reducer: {
    listClass: listclassReducer,
  },
});
