import React from "react";

function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        name="todo-check"
        className="btn"
        checked={task.isCompleted}
        onChange={() => toggleTask(task.id)}
      />
      <p className={task.isCompleted ? "task strikethrough" : "task"}>
        {task.name}
      </p>
      <button className="btn">Edit</button>
      <button className="btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}



export default TodoItem;
