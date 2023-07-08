import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 1,


    }
    document.title = `${this.capitalizeFullString(this.props.category)} - ${this.capitalizeFullString("Inshort's")} `
  }
  capitalizeFullString = (string) => {
    if (typeof string !== 'string') {
      throw new Error('Input must be a string');
    }

    if (string.length === 0) {
      return '';
    }

    const words = string.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
  }

  async ubdate() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70c24b93845f4b2395e274ae78fa4a4f&page=${this.state.page}&pagesize=${this.props.pagesize}`
    // this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
      
    })
  }
  async componentDidMount() {
    this.ubdate();

  }
  fetchMoreData = async () => {
    setTimeout(async()=>{
      this.setState({
        page: this.state.page + 1
      });
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70c24b93845f4b2395e274ae78fa4a4f&page=${this.state.page}&pagesize=${this.props.pagesize}`
   
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
      loading: false
    
    })
    },3000)
    

    

  };

  // handlenextclick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {

  //   }
  //   else {

  //     this.setState({ page: this.state.page + 1 })
  //     this.ubdate();
  //   }

  // }
  // handlepreviousclick = async () => {

  //   this.setState({ page: this.state.page - 1 })
  //   this.ubdate();
  // }

  render() {
    return (

      <div style={{ backgroundColor: "#202020", color: "white" }}>

        <h1 className="text-center">Inshort's - Top headlines on {this.props.category}</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state
            .totalResults}
          loader=  { <Spinner />}
        >
          <div className="container">
            <div className="row my-5">

              {this.state.articles.map((element) => {
                //! every maped element should have a unique key thats why we have to asign one and jo return ho rha h usme key asign hotih


                return <div className="col-md-4 my-3" key={element.url}>
                  <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} Newsurl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                </div>

              })}


            </div>
          </div>
        </InfiniteScroll>
{/* 
        <div className="d-flex justify-content-between">
          <button type="button " disabled={this.state.page <= 1} onClick={this.handlepreviousclick} className="btn btn-secondary">Previous</button>

          <button type="button" id='nextpage' onClick={this.handlenextclick} className="btn btn-success" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pagesize)}  >Next</button>

        </div> */}

      </div>

    )
  }
}
News.defaultProps = {
  country: 'in',
  pagesize: 9,
  category: 'health'
};
News.propTypes = {
  country: PropTypes.string.isRequired,
  pagesize: PropTypes.number.isRequired
};

