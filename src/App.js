import { useState } from "react";
import ShowAnimals from "./ShowAnimals";

function getRandomAnimals() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
   return <ShowAnimals type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}> Add animals </button>
      <h1>{renderedAnimals}</h1>
    </div>
  );
}

export default App;
