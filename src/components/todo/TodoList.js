import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, setTasks }) {
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
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
  };

  const todoList = tasks.map((task) => {
    return (
      <TodoItem
        task={task}
        key={task.id}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    );
  });

  return <div className="todo-list">{todoList}</div>;
}

export default TodoList;
