import { createSlice } from "@reduxjs/toolkit";

const current = new Date().toLocaleDateString("en-GB");

const initialState = [
  {
    title: "Synonyms & Antonyms",
    major: "English",
    date: current,
    status: false,
  },
  { title: "OOP", major: "Science", date: current, status: true },
  {
    title: "Solar Sytem",
    major: "Science",
    date: current,
    status: false,
  },
  {
    title: "Security System",
    major: "Science",
    date: current,
    status: false,
  },
  { title: "Solar Sytem", major: "Science", date: current, status: true },
  {
    title: "Data structor",
    major: "Science",
    date: current,
    status: false,
  },
];

const listClassSlice = createSlice({
  name: "listClass",
  initialState,
  reducers: {
    addClass(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllListClass = (state) => state.listClass;

export const { addClass } = listClassSlice.actions;

export default listClassSlice.reducer;
