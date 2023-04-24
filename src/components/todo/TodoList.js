import TodoItem from "./TodoItem";

function TodoList({ tasks, setTasks, filterText }) {
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      })
    );
  }

  function editTask(id, newName) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            name: newName,
          };
        }
        return task;
      })
    );
  }

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const todoList = filteredTasks.map((task) => {
    return (
      <TodoItem
        task={task}
        key={task.id}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    );
  });

  return <div className="todo-list">{todoList}</div>;
}

export default TodoList;
