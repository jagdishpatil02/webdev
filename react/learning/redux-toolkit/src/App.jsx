import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Increment } from "./components/Increment";
import { SimpleTodo } from "./components/SimpleTodo";

function App() {
  return (
    <>
      <h1>Getting started with React toolkit</h1>
      <AddTodo></AddTodo>
      <SimpleTodo></SimpleTodo>
      <Increment></Increment>
    </>
  );
}

export default App;
