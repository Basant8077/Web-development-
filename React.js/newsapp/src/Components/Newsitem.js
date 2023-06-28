import React, { Component } from 'react'


export default class Newsitem extends Component {
  
    render() {
        let {title , discription,imgUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{
                    width: "20rem"
                }}>
                    <img src={!imgUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{discription}</p>
                            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn  btn-sm btn-outline-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}
