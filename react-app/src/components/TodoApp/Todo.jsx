import "../TodoApp/Todo.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import store from "../../app/store";
import { Link } from "react-router-dom";
export default function Todo() {
  const dispatch = useDispatch();
  const todosArray = useSelector((state) => state.todosArray.currentTodos);
  // testing array
  const array = [
    { text: "doing a lot of t brel", id: 1 },
    { text: "hldshfldfh", id: 2 },
    { text: "hldshfldfh", id: 3 },
  ];
  console.log(todosArray);
  return (
    <>
      <div className="main-container">
        <div className="nav-container">Website Todo</div>
        <div className="todos-container">
          {array.map((todo) => {
            return (
              <>
                <div className="single-todo">
                  <div className="todo-text">
                    <p>{todo.text}</p>
                  </div>
                  <div className="todo-btns">
                    <MdDone className="done-todo" />
                    <FaTrashAlt className="delete-todo" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button className="new-task">
          <Link className="new-task-link" to={"/todoinput"}>
            + New Task
          </Link>
        </button>
      </div>
    </>
  );
}
