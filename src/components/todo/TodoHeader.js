import CreateTask from "./CreateTask";
import TodoSearch from "./TodoSearch";

function TodoHeader({ tasks, setTasks, filterText, setFilterText }) {
  return (
    <div className="header">
      <TodoSearch filterText={filterText} setFilterText={setFilterText} />
      <CreateTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default TodoHeader;
