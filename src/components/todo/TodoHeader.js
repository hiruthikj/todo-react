function TodoHeader() {
  return (
    <div className="header">
      <input type="text" name="todo-search" id="todo-search" />
      <button type="submit">Clear</button>
    </div>
  );
}

export default TodoHeader;
