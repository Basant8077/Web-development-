import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
        <h2>Inshort's - India's Best News App</h2>
        <div className="row my-3">
                <div className="col-md-4">
                    <Newsitem title= "My title" discription = "my dis" />
                     
                </div>
                <div className="col-md-4">
                    <Newsitem/>
                    
                </div>
                <div className="col-md-4">
                    <Newsitem/>
                    
                </div>
        </div>

        </div>
      </div>
    )
  }
}
