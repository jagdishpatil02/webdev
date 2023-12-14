import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import ContextComponent from "./components/ContextComponent";
export const ThemeContext = React.createContext();
// use state with function that will be called everytime
// function runFunction() {
//   console.log("called multiple times");
//   return 4;
// }

function App() {
  // use state
  const [count, setCount] = useState(4);
  const [once, setOnce] = useState(() => {
    console.log("called only once");
    return 0;
  });

  // use effect
  const [resourceType, SetresourceType] = useState("");
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (resourceType) {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    }
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  // use memo

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles]);

  function slowFunction(number) {
    console.log("calling slow function");
    for (let index = 0; index <= 100000000; index++) {}
    return number * 2;
  }

  // use ref

  const [name, setName] = useState("");
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prev = useRef("");

  useEffect(() => {
    prev.current = name;
    renderCount.current = renderCount.current + 1;
  }, [name]);

  function focusInput() {
    inputRef.current.focus();
  }

  // use context

  const [darkThemeContext, SetDarkThemeContext] = useState(true);

  function toggleTheme() {
    SetDarkThemeContext((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <>
      <h2>Use State Example</h2>
      <div className="card">
        <div>{count}</div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment Count
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement Count
        </button>
      </div>

      <div className="card">
        <button onClick={() => setOnce((count) => count + 1)}>
          Increment Count {once}
        </button>
      </div>

      <h2>Use Effect Example</h2>

      <button onClick={() => SetresourceType("posts")}>Posts</button>
      <button onClick={() => SetresourceType("users")}>Users</button>
      <button onClick={() => SetresourceType("comments")}>Comments</button>
      <h3>{resourceType}</h3>

      {items && items.length > 0 ? (
        items.map((item, index) => {
          console.log(item);
          return <pre key={index}>{JSON.stringify(item)}</pre>;
        })
      ) : (
        <p>no data</p>
      )}

      <h3> window width {windowWidth}</h3>

      <h2>Use Memo</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>

      <h2>Use Ref</h2>

      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={focusInput}>Set focus</button>
      <div>
        My name is {name} and my prev name was {prev.current}
      </div>
      <div>I rendered {renderCount.current} times</div>

      <h2>Use Context</h2>

      <ThemeContext.Provider value={darkThemeContext}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ContextComponent></ContextComponent>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
