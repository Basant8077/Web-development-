
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
       
    }
  }

  
  render() {
    return (
      <div>
      <Navbar> </Navbar>
      <News/>
      </div>
    )
  
  }
  componentDidMount=()=>{

  }
}
