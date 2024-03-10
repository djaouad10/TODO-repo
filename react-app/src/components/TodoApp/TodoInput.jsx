import "../TodoApp/TodoInput.css";
import { controlInput } from "../../app/features/TodoInputSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../../app/features/TodosArraySlice";

export default function TodoInput() {
  const dispatch = useDispatch();
  const todoText = useSelector((state) => state.todoInput.todoText);
  return (
    <>
      <div className="input-main-container">
        <div className="input-nav-container">Website Todo</div>
        <div className="input-box-container">
          <input
            className="input-box"
            type="text"
            placeholder="Enter your task here"
            onChange={(e) => dispatch(controlInput(e.target.value))}
          />
        </div>
        <button className="add-task">
          <Link className="add-task-link" to={"/"}>
            ADD
          </Link>
        </button>
        <button
          onClick={() => dispatch(addTodo(todoText))}
          className="cancel-task"
        >
          <Link className="cancel-task-link" to={"/"}>
            CANCEL
          </Link>
        </button>
      </div>
    </>
  );
}
