import { createContext, useState } from "react";

const tempContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(0);

  const valueToShare = {
    count,
    incremetCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <tempContext.Provider value={valueToShare}>{children}</tempContext.Provider>
  );
}

export { Provider };
export default tempContext;
