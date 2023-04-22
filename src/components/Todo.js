import { useState } from "react";
import TodoHeader from "./todo/TodoHeader";
import TodoList from "./todo/TodoList";

function Todo() {
  const todoData = [
    { id: 1, name: "Meditation", isCompleted: true },
    { id: 2, name: "Read Books", isCompleted: false },
    { id: 3, name: "Coding", isCompleted: false },
    { id: 4, name: "Sleep", isCompleted: true },
  ];

  const [tasks, setTasks] = useState(todoData);

  return (
    <div>
      <TodoHeader tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Todo;
