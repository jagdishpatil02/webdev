import { useState } from "react";

const Counterhook = (intialValue = 0) => {
  const [counter, setCounter] = useState(intialValue);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return {
    counter,
    increment,
  };
};

export default Counterhook;
