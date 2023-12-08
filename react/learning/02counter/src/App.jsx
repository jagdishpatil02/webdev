import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    if (counter <= 20) {
      counter = counter + 1;

      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const decreaseValue = () => {
    if (counter >= 1) {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>hello</h1>
      <p>Counter: {counter}</p>
      <button onClick={increaseValue}>Add value</button>
      <button onClick={decreaseValue}>Remove value</button>
    </>
  );
}

export default App;
