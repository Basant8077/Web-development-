
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import Notfound from './Components/Notfound';
import { Route, Routes } from "react-router-dom"

export default class App extends Component {

  pagesize = 12;
  
  render() {
    return (
      <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<News  key= "general"  pagesize = {this.pagesize} country = "in" category = "General"/>}  />
        <Route path='/business' element ={<News  key= "Business" pagesize = {this.pagesize} country = "us" category = "Business"/>}  />
        <Route path='/entertainment' element ={<News key= "1" pagesize = {this.pagesize} country = "us" category = "Entertainment"/>}  />
        <Route path='/health' element ={<News key="2" pagesize = {this.pagesize} country = "us" category = "Health"/>}  />
        <Route path='/science' element ={<News key="3" pagesize = {this.pagesize} country = "us" category = "Science"/>}  />
        <Route path='/sports' element ={<News key="4" pagesize = {this.pagesize} country = "us" category = "Sports"/>}  />
        <Route path='/technology' element ={<News key="5s"  pagesize = {this.pagesize} country = "us" category = "Technology"/>}  />
        <Route path='*'element={<Notfound/>} ></Route>
      </Routes>
      
    
      </div>
    )
  
  }

}
