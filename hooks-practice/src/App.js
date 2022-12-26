import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };

    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);

  return (
    <div className="App">
      <div>
        <h2>Use State:</h2>
        <div>{count}</div>
        <button onClick={incrementCount}>Increment</button>
      </div>
      <div>
        <h2>Use Effect:</h2>
        <div
          id="myDiv"
          style={{
            color: "white",
            width: "100px",
            height: "100px",
            position: "absolute",
            left: "50%",
            top: "50%",
            backgroundColor: color,
          }}
        >
          This div can change color. Click on me!
        </div>
      </div>
    </div>
  );
}

export default App;
