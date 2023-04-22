function TodoSearch({ tasks, setTasks }) {
  return (
    <>
      <input
        type="text"
        name="todo-search"
        id="todo-search"
        placeholder="Search"
      />
      <button type="submit">Clear</button>
    </>
  );
}

export default TodoSearch;
