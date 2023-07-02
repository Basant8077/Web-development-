
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import Spinner from './Components/Spinner';

export default class App extends Component {

  
  render() {
    return (
      <div>
      <Navbar/>
      <News pagesize = {9} country = "us" category = 'general'/>
      </div>
    )
  
  }
  componentDidMount=()=>{

  }
}
