import { configureStore } from "@reduxjs/toolkit";
import listclassReducer from "../features/listclass/listclassSlice";
import liststudentReducer from "../features/liststudent/liststudentSlice";

export const store = configureStore({
  reducer: {
    listClass: listclassReducer,
    listStudent: liststudentReducer,
  },
});
