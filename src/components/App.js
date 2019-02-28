import React, { Component } from 'react';
import Header from '../shared/components/layout/Header'
import Todo from './Todo/Todo'
import Timer from './Pomodoro/Timer'
import Coins from './Coins/Coins'
import Notes from './Notes/Notes'
import Footer from '../shared/components/layout/Footer'
import Content from '../shared/components/layout/Content'
import Chart from './Chart/Chart'
import Animation from './Animation/Animation'
import Numbers from './Numbers/Numbers'
import XSS from './Xss/Xss'
import { notes1, notes2 } from './Notes/data'
import './App.css';
import Xss from './Xss/Xss';
import Calculator from './Calculator/Calculator'
import Person from './Person/Person'
import CalculatorJuve from "./Calculatorjuve/Calculatorjuve"

class App extends Component {
 
  //componentDidMount(){
  //setTimeout(() => {
  //  this.setState({
  //      notes: [...this.state.notes, ...notes2]
  //    })
  //  },10000) 
  //}

  render() {
    return (
      <>
      <div className="App">
        <Header title='Hola Mundo'/>
        <Content>
          <Person></Person>
        </Content>
        <Footer/>
      </div>
      </>
    );
  }
}

export default App;
