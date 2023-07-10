
import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import News from './Components/News';
import Notfound from './Components/Notfound';
import { Route, Routes } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  pagesize = 12;
  state = {
    progress: 0
  }

  apikey = process.env.React_app_api_key

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {



    return (
      <div>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}

        />
        <Navbar />
        
        <Routes>
          <Route path='/' element={<News apikey={this.apikey} setProgress={this.setProgress} key="general" pagesize={this.pagesize} country="in" category="General" />} />
          <Route path='/business' element={<News apikey={this.apikey} setProgress={this.setProgress} key="Business" pagesize={this.pagesize} country="us" category="Business" />} />
          <Route path='/entertainment' element={<News apikey={this.apikey} setProgress={this.setProgress} key="1" pagesize={this.pagesize} country="us" category="Entertainment" />} />
          <Route path='/health' element={<News apikey={this.apikey} setProgress={this.setProgress} key="2" pagesize={this.pagesize} country="us" category="Health" />} />
          <Route path='/science' element={<News apikey={this.apikey} setProgress={this.setProgress} key="3" pagesize={this.pagesize} country="us" category="Science" />} />
          <Route path='/sports' element={<News apikey={this.apikey} setProgress={this.setProgress} key="4" pagesize={this.pagesize} country="us" category="Sports" />} />
          <Route path='/technology' element={<News apikey={this.apikey} setProgress={this.setProgress} key="5s" pagesize={this.pagesize} country="us" category="Technology" />} />
          <Route path='*' element={<Notfound />} ></Route>
        </Routes>


      </div>
    )

  }

}
