import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);
  const [previous, setPrevious] = useState("");
  const firstDieImage = require(`./assets/${firstDieResult}.png`);
  const secondDieImage = require(`./assets/${secondDieResult}.png`);

  function rollDice() {
    setPrevious(firstDieResult + secondDieResult);
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", margin: 30 }}>
          <img src={firstDieImage} className="dice" alt="First" />
          <img src={secondDieImage} className="dice" alt="Second" />
        </div>
        <span>{firstDieResult + secondDieResult}</span>
        <button className="button" onClick={rollDice}>
          Roll the dice
        </button>
        <div className="history">Previous roll: {previous}</div>
      </header>
    </div>
  );
}

export default App;
