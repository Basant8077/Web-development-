import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
          <h2>Inshort's - Top headlines</h2>
          <div className="row my-3">
            {this.state.article.map((element) => {
              //! every maped element should have a unique key thats why we have to asign one and jo return ho rha h usme key asign hotih
              return <div className="col-md-4" key={element.url}>
                <Newsitem  title={element.title}  description={element.description} imgUrl = {element.urlToImage} Newsurl={element.url}/>
              </div>

            })}

          </div>

        </div>
      </div>
    )
  }
}
