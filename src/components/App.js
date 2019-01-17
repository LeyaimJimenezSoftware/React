import React, { Component } from 'react';
import Header from '../shared/components/leyout/Header'
import Todo from './Todo/Todo'
import Timer from './Pomodoro/Timer'
import Coins from './Coins/Coins'
import Notes from './Notes/Notes'
import Footer from '../shared/components/leyout/Footer'
import Content from '../shared/components/leyout/Content'

import { notes1, notes2 } from './Notes/data'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      notes: notes1
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2]
      })
    },10000) 
  }

  render() {
    return (
      <div className="App">
        <Header title='Hola Mundo'/>

        <Content>
          <Notes notes={this.state.notes}/>
        </Content>
        <Footer/>
      </div>
    );
  }
}

export default App;
