import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  //  static defaultProps = {
  //   country: 'in',
  //   pagesize: 9,
  //   category: 'general'
  // };
  // static propTypes = {
  //   country: PropTypes.string.isRequired,
  //   pagesize: PropTypes.number.isRequired
  // };
  

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 1,


    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70c24b93845f4b2395e274ae78fa4a4f&page=${this.state.page}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    })

  }
  handlenextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70c24b93845f4b2395e274ae78fa4a4f&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
      this.setState({ loading: true })
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({
        articles: parseddata.articles,
        page: this.state.page + 1,
        loading: false
      })
    }
  }
  handlepreviousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70c24b93845f4b2395e274ae78fa4a4f&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      page: this.state.page - 1,
      loading: false
    })
  }

  render() {
    return (
      <div style={{ backgroundColor: "#202020", color: "white" }}>
        <div className="container">
          <h1 className="text-center">Inshort's - Top headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row my-5">
            {!this.state.loading && this.state.articles.map((element) => {
              //! every maped element should have a unique key thats why we have to asign one and jo return ho rha h usme key asign hotih


              return <div className="col-md-4 my-3" key={element.url}>
                <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} Newsurl={element.url} />
              </div>

            })}

          </div>
          <div className="d-flex justify-content-between">
            <button type="button " disabled={this.state.page <= 1} onClick={this.handlepreviousclick} className="btn btn-secondary">Previous</button>

            <button type="button" id='nextpage' onClick={this.handlenextclick} className="btn btn-success" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pagesize)} >Next</button>

          </div>

        </div>
      </div>
    )
  }
}
News.defaultProps = {
  country: 'in',
  pagesize: 9,
  category:'general'
};
News.propTypes = {
  country: PropTypes.string.isRequired,
  pagesize: PropTypes.number.isRequired
};

