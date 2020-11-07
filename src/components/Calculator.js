import React from "react";
import "./Calculator.css";

const Calculator = (props) => {
  return (
    <div className="calc-wrapper">
      <div className="input">Hi there!</div>
      <div className="row">
        <button className="signs">(</button>
        <button className="signs">)</button>
        <button className="signs">%</button>
        <button className="signs">AC</button>
      </div>

      <div className="row">
        <button className="numbers">7</button>
        <button className="numbers">8</button>
        <button className="numbers">9</button>
        <button className="arithmetic">÷</button>
      </div>

      <div className="row">
        <button className="numbers">4</button>
        <button className="numbers">5</button>
        <button className="numbers">6</button>
        <button className="arithmetic">x</button>
      </div>

      <div className="row">
        <button className="numbers">1</button>
        <button className="numbers">2</button>
        <button className="numbers">3</button>
        <button className="arithmetic">-</button>
      </div>

      <div className="row">
        <button className="numbers">0</button>
        <button className="numbers">.</button>
        <button className="arithmetic">=</button>
        <button className="arithmetic">+</button>
      </div>
    </div>
  );
};

export default Calculator;
