import React, { useState } from "react";
import TodoHeader from "./todo/TodoHeader";
import TodoList from "./todo/TodoList";

function Todo() {
  const todoData = [
    { id: 1, name: "Meditation", isCompleted: true, isVisible: true },
    { id: 2, name: "Read Books", isCompleted: false, isVisible: true },
    { id: 3, name: "Coding", isCompleted: false, isVisible: true },
    { id: 4, name: "Sleep", isCompleted: true, isVisible: true },
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
