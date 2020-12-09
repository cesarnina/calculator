import React, { Component } from "react";
import  Calculator from "./components/Calculator";
import History from "./components/History";
import { evaluate } from "mathjs";
import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      history: [],
    }
    this.clearInput = this.clearInput.bind(this)
    this.addToInput = this.addToInput.bind(this)
    this.handleEqual = this.handleEqual.bind(this)
  }

  clearInput() {
    this.setState({
      input: ""
    })
  }

  addToInput(value) {
    this.setState({
      input: this.state.input + value,
    })
  }

  handleEqual() {
    if (this.state.history.length > 9) {
      const lastTenCalc = this.state.history
      lastTenCalc.pop()
      this.setState({
        history: lastTenCalc,
      })
    }
    this.setState({
      history: [...[`${this.state.input} = ${evaluate(this.state.input)}`], ...this.state.history],
      input: evaluate(this.state.input),
    })
  }

  render () {
    return (
      <div className="component-container">
        <Calculator input={this.state.input} 
                    addToInput={this.addToInput}
                    clearInput={this.clearInput}
                    handleEqual={this.handleEqual}/>
        <History history={this.state.history}/>
      </div>
    )
  };
};