
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import Notfound from './Components/Notfound';
import { Route, Routes } from "react-router-dom"

export default class App extends Component {

  
  render() {
    return (
      <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<News  key= "general"  pagesize = {12} country = "us" category = "general"/>}  />
        <Route path='/business' element ={<News  key= "business" pagesize = {12} country = "us" category = "business"/>}  />
        <Route path='/entertainment' element ={<News key= "1" pagesize = {12} country = "us" category = "entertainment"/>}  />
        <Route path='/health' element ={<News key="2" pagesize = {12} country = "us" category = "health"/>}  />
        <Route path='/science' element ={<News key="3" pagesize = {12} country = "us" category = "science"/>}  />
        <Route path='/sports' element ={<News key="4" pagesize = {12} country = "us" category = "sports"/>}  />
        <Route path='/technology' element ={<News key="5s"  pagesize = {12} country = "us" category = "technology"/>}  />
        <Route path='*'element={<Notfound/>} ></Route>
      </Routes>
      
    
      </div>
    )
  
  }

}
