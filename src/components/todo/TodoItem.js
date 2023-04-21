import { useState } from "react";

function TodoItem({ task, deleteTask, toggleTask, editTask }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  function toggleEdit() {
    setOnEdit(!onEdit);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        name="todo-check"
        className="btn"
        checked={task.isCompleted}
        onChange={() => toggleTask(task.id)}
      />
      {onEdit ? (
        <input
          type="text"
          className=""
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      ) : (
        <p className={task.isCompleted ? "task strikethrough" : "task"}>
          {task.name}
        </p>
      )}

      {onEdit ? (
        <button
          className="btn"
          onClick={() => {
            editTask(task.id, editedName);
            setOnEdit(false);
          }}
        >
          Save
        </button>
      ) : (
        <button className="btn" onClick={toggleEdit}>
          Edit
        </button>
      )}
      <button className="btn" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
