import React, { Component } from 'react'
import { element } from 'prop-types'
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

const App = props => ( 

  <div className="App">
    <Header title="Routing" />
      <Content>
        {props.children}
      </Content>
    <Footer />
  </div> 
)

App.propTypes = { 
  children: element
}

export default App;
