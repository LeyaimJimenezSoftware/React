import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  constructor() {
  // we need to define super() at the beginning of the constructor tho have acces to this.
  super()
    this.state = {
      name: 'Leyaim'
    }
  }
  componentDidMount(){
    setTimeout (() => {
      this.setState({
        name:'Juventus'
      })
    },1000)
  }
  render(){

    console.log('Name:', this.state.name)

    return ( 
      <div className="Home">
      <p>Hi my name is {this.state.name}</p>
      </div>
    )
  }
}


export default Home