import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";

function App() {
  const title = "Todo App";

  return (
    <>
      <div className="container">
        <Header title={title} />
        <Todo />
        <Footer />
      </div>
    </>
  );
}

export default App;
