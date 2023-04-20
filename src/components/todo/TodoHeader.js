function TodoHeader() {
  return (
    <div className="header">
      <input type="text" name="todo-search" id="todo-search" />
      <button type="submit">Filter</button>
    </div>
  );
}

export default TodoHeader;
