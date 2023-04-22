import { useState } from "react";
import { generateId } from "../../utilities";

function CreateTask({ tasks, setTasks }) {
  const [creatingTask, setCreatingTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  function renderAddButton() {
    return (
      <div>
        {" "}
        <button onClick={() => setCreatingTask(true)}>Create Task</button>
      </div>
    );
  }

  function renderCreateForm() {
    return (
      <form onSubmit={createTask}>
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }

  function createTask() {
    setTasks([
      ...tasks,
      {
        id: generateId(),
        name: newTaskName,
        isCompleted: false,
      },
    ]);
    setNewTaskName("");
    setCreatingTask(false);
  }

  return (
    <div className="">
      {creatingTask ? renderCreateForm() : renderAddButton()}
    </div>
  );
}

export default CreateTask;
