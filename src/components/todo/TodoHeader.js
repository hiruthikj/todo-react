import CreateTask from "./CreateTask";
import TodoSearch from "./TodoSearch";

function TodoHeader({ tasks, setTasks }) {
  return (
    <div className="header">
      <TodoSearch tasks={tasks} setTasks={setTasks} />
      <CreateTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default TodoHeader;
