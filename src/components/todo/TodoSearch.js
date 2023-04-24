function TodoSearch({ filterText, setFilterText }) {
  return (
    <>
      <input
        type="text"
        name="todo-search"
        id="todo-search"
        placeholder="Search"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button type="submit" onClick={() => setFilterText("")}>
        Clear
      </button>
    </>
  );
}

export default TodoSearch;
