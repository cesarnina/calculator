import React from "react";
import "./Calculator.css";

const Calculator = (props) => {
  const clear = props.input.length > 0 ? "C" : "AC";
  return (
    <div className="calc-wrapper">
      <div className="input">{props.input}</div>
      <div>
        <button className="signs" onClick={()=>props.clearInput()}>{clear}</button>
        <button className="signs" onClick={()=>props.addToInput("(")}>(</button>
        <button className="signs" onClick={()=>props.addToInput(")")}>)</button>
        <button className="arithmetic" onClick={()=>props.addToInput(" / ")}>÷</button>
      </div>

      <div>
        <button className="numbers" onClick={()=>props.addToInput("7")}>7</button>
        <button className="numbers" onClick={()=>props.addToInput("8")}>8</button>
        <button className="numbers" onClick={()=>props.addToInput("9")}>9</button>
        <button className="arithmetic" onClick={()=>props.addToInput(" * ")}>x</button>
      </div>

      <div>
        <button className="numbers" onClick={()=>props.addToInput("4")}>4</button>
        <button className="numbers" onClick={()=>props.addToInput("5")}>5</button>
        <button className="numbers" onClick={()=>props.addToInput("6")}>6</button>
        <button className="arithmetic" onClick={()=>props.addToInput(" - ")}>-</button>
      </div>

      <div>
        <button className="numbers" onClick={()=>props.addToInput("1")}>1</button>
        <button className="numbers" onClick={()=>props.addToInput("2")}>2</button>
        <button className="numbers" onClick={()=>props.addToInput("3")}>3</button>
        <button className="arithmetic" onClick={()=>props.addToInput(" + ")}>+</button>
      </div>

      <div>
        <button className="numbers zero" onClick={()=>props.addToInput("0")}>0</button>
        <button className="numbers" onClick={()=>props.addToInput(".")}>.</button>
        <button className="arithmetic" onClick={()=>props.handleEqual()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
