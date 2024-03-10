import "./App.css";
import Todo from "./components/TodoApp/Todo";
import TodoInput from "./components/TodoApp/TodoInput";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todoinput" element={<TodoInput />} />
      </Routes>
    </>
  );
}

export default App;
