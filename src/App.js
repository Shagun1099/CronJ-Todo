import "./App.css";
import Header from "./components/header";
import Todos from "./components/todos";

function App() {
  return (
    <div className="app">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
