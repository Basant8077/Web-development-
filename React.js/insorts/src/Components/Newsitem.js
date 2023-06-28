import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
       let  [title,description,urlToImage,Newsurl]= this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={Newsurl} target="_blank "className="btn btn-primary">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}
