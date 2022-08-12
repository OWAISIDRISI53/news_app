import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    name: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=348a13ef35e8481794714b444cd237ec&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${
      this.props.category
    }&apiKey=348a13ef35e8481794714b444cd237ec&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      page: (this.state.page -= 1),
      articles: parseData.articles,
      loading: false,
    });
  };

  handleNextClick = async (e) => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    )
      e.target.disabled = true;
    else {
      let url = `https://newsapi.org/v2/top-headlines?category=${
        this.props.category
      }&apiKey=348a13ef35e8481794714b444cd237ec&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();

      this.setState({
        page: (this.state.page += 1),
        articles: parseData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>News App - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between  ">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>

          <button onClick={this.handleNextClick} className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
