import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTodos: [],
  currentID: 1,
};

const TodosArray = createSlice({
  name: "todosArray",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.currentID = state.currentID + 1;
      state.currentTodos.push({ text: action.payload, id: state.currentID });
    },
    removeTodo: (state, action) => {
      state.currentTodos = state.currentTodos.filter(
        (todo) => todo.id != action.payload
      );
    },
  },
});

export default TodosArray.reducer;
export const { addTodo, removeTodo } = TodosArray.actions;
