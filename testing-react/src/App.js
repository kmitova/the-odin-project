import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <div className="App">
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </div>
  );
}

export default App;
