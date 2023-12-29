import { useContext } from "react";
import tempContext from "./context/context";
function Hello() {
  const { count, incremetCount } = useContext(tempContext);
  return (
    <>
      <h1>Hello from new file1 </h1>
      {count}
      <button onClick={incremetCount}>click</button>
    </>
  );
}

export default Hello;

const message = "hi";
const message1 = "hello";

export { message, message1 };
