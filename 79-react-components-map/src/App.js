import React from "react";
import "./App.css";
// import p from "./components/Ptags";
import Dates from "./components/Dates";

const APP_TITLE = "Awesome Pet Shop";

/**
 * Exercise: 1
 *
 * 1. Create a list element and render all animals as list items.
 *
 * Exercise 2
 *
 * 1. Display the APP_TITLE in an h1
 * 2. Display today's date in a p
 */

const App = () => {
  const animals = ["cat", "dog", "giraffe", "pig", "lion", "rabbit"];
  let dt = new Date();

  return (
    <div className="app">
      <ul>
        {animals.map((animalName) => (
          <li key={animalName}>{animalName}</li>
        ))}
      </ul>
      <h1>{APP_TITLE}</h1>
      <p>{dt.toLocaleDateString()}</p>
    </div>
  );
};

export default App;
