import React, { Component } from 'react'

class Calculatorjuve extends Component{
  constructor(){
    super()

    this.state = {
        number1: 0,
        number2: 0,
        result: 0,
        operator: 'sumar'
    }
  }

  handleOnChange = (e) => {
    const { target: {value, name} } = e
    this.setState({
      [name] : value
    })
  }

  handleResult = () => {
    const { number1, number2, operator } = this.state
    let result
    switch(operator){
      case 'sumar' : 
        result = parseInt(number1) + parseInt(number2)
        break
      case 'restar':
        result = parseInt(number1) - parseInt(number2)
        break
      case 'div':
        result = parseInt(number1) / parseInt(number2)
        break
      case 'multi':
        result = parseInt(number1) * parseInt(number2)
        break
    }
    this.setState({
      result
    })
  }

  render(){
    return(
      <div>
        <select id='select' name='operator' onChange={this.handleOnChange}>
          <option name='suma' value="sumar" >sumar</option>
          <option name='restar' value="restar">restar</option>
          <option name='div' value="div">dividir</option>
          <option name='multi' value="multi">multiplicar</option>
        </select>
        <p>Numero 1</p>
        <input name='number1'type='text' onChange={this.handleOnChange}></input>
        <label>Numero 2</label>
        <input name='number2' type='text' onChange={this.handleOnChange}></input>
        <button onClick={this.handleResult}>OK</button>
        <p name='result'>{this.state.result}</p>
      </div>
    )
  }
}

export default Calculatorjuve 