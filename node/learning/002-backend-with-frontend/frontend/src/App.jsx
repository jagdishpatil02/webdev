import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/jokes");
      const response = await data.json();
      setJokes(response);
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Jokes list</h1>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <p>
            {index + 1} {joke.title} {joke.content}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
