import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numerAllowed, setNumerAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useref hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmanopqrstuvwxyz";
    if (numerAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^*+_)?><-";
    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numerAllowed, charAllowed, setPassword]);

  // copy passwor text
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numerAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="h-screen container-fluid bg-black py-16 px-16 text-white">
        <input
          type="text"
          value={password}
          className="text-black p-2"
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-500 text-white"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
        <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer p-4 "
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={numerAllowed}
            onChange={() => setNumerAllowed((prev) => !prev)}
          />{" "}
          <label>Numbers allowed</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />{" "}
          <label>Chars allowed</label>
        </div>
      </div>
    </>
  );
}

export default App;
