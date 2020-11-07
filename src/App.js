import React, { Component } from "react";
import  Calculator from "./components/Calculator";
import History from "./components/History";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      answer: ""
    }
  }

  // addToInput() 

  render () {
    return (
      <div className="app">
        <Calculator />
        <History />
      </div>
    )
  };
};