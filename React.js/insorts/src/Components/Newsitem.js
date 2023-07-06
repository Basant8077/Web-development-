import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
       let  {title,description,imgUrl,Newsurl,date,author,source}= this.props;
        return (
            <div>
                <div className="card " style={{ backgroundColor: "#404040",color:" white"}}>

                    <img src={ ! imgUrl?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : imgUrl } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span class="badge badge-pill badge-danger">{source}</span></h5>
                        <p className="card-text ">{description}</p>
                        
                        <p className="card-text my-2"><small className="text-muted"> By {!author?"Unknown":author} on {new Date(date).toGMTString() }</small></p>
                        <a href={Newsurl} target="_blank "className="btn btn-primary">Read more...</a>
                    </div>
                </div>
            </div>
        )
    }
}
