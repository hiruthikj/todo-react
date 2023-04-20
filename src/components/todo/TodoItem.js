import React from "react";

function TodoItem() {
  return (
    <>
      <div className="todo-item">
        <input type="checkbox" name="todo-check" id="" className="btn" />
        <p className="task">Task</p>
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </>
  );
}

export default TodoItem;
