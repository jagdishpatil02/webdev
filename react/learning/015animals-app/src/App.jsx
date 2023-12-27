import { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

function App() {
  const [animals, setAnimals] = useState([]);

  function getRandomAnimals() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  }

  const addAnimal = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderedElements = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <>
      <button onClick={addAnimal}>Add Animal</button>
      {renderedElements}
    </>
  );
}

export default App;
