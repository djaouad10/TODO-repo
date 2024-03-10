import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoText: "",
};

const TodoInput = createSlice({
  name: "todoInput",
  initialState,
  reducers: {
    controlInput: (state, action) => {
      state.todoText = action.payload;
    },
  },
});

export default TodoInput.reducer;
export const { controlInput } = TodoInput.actions;
