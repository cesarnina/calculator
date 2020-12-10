import React, { Component } from "react";
import  Calculator from "./components/Calculator";
import History from "./components/History";
import { evaluate } from "mathjs";
import axios from 'axios'

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
    const { input } = this.state
    const doNotStartWith = ' / * )'
    if (input.length === 0 && doNotStartWith.includes(value)) return;
    if (value === ')' && !input.includes('(')) return;
    this.setState({
      input: input + value,
    })
  }

  async handleEqual() {
    if (this.state.input.length === 0) return;
    const calc = `${this.state.input} = ${evaluate(this.state.input)}`
    await axios.post('/api/calculator', {
      calculation: calc
    })
    while (this.state.history.length > 9) {
      const oldCalc = this.state.history.shift()
      await axios.delete(`api/calculator/${oldCalc.id}`)
    }
    const { data } = await axios.get('/api/calculator')
    this.setState({
      history: data,
      input: evaluate(this.state.input)
    })
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/calculator')
    this.setState({ history: data })
    setInterval(async ()=> {
      const { data } = await axios.get('/api/calculator')
      this.setState({ history: data })
    }, 5000)
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