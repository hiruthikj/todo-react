import { useState } from "react";
import { generateId } from "../../utilities";

function CreateTask({ tasks, setTasks }) {
  const [creatingTask, setCreatingTask] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  function renderAddButton() {
    return (
      <div>
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
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }

  function createTask(e) {
    // It is required, because form usually sends response to server
    // and servers in react send pack same page (as we arent making action to any URL)
    // and the page will reload, causing react to restart
    e.preventDefault();

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
