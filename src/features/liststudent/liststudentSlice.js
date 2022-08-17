import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Hung",
    id: "124123123",
    job: "Gymer",
  },
  {
    name: "Doan Ngu",
    id: "124123123",
    job: "It",
  },
  {
    name: "Tuan Ngu",
    id: "124123123",
    job: "UI/UX Desinger",
  },
];

const listStudentSlice = createSlice({
  name: "listStudent",
  initialState,
  reducers: {
    addStudent(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllListStudent = (state) => state.listStudent;

export const { addStudent } = listStudentSlice.actions;

export default listStudentSlice.reducer;
