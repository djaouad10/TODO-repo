import { configureStore } from "@reduxjs/toolkit";
import todoInputReducer from "./features/TodoInputSlice";
import todosArrayReducer from "./features/TodosArraySlice";

const store = configureStore({
  reducer: {
    todoInput: todoInputReducer,
    todosArray: todosArrayReducer,
  },
});

export default store;
