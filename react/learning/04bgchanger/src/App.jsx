import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="h-screen w-full container duration-200 flex items-center justify-center"
      >
        <div className="flex items-center justify-center  gap-4 bg-white w-9/12	 fixed bottom-14 rounded-lg py-2">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("Blue")}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Green")}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
