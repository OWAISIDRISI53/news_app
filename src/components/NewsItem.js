import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card ">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>

          <img
            height={200}
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/22/08/moto-razr-2022-teardown-video/-952x498w6/gsmarena_000.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
            loading="lazy"
          />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>
            <p className="card-text">{description} ...</p>
            <div className=" text-muted my-2">
              By{" "}
              <strong className="text-danger fw-bold">
                {!author ? "Unknown" : author}
              </strong>{" "}
              on {new Date(date).toGMTString()}
            </div>

            <a href={url} target="_black" className="btn  btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=348a13ef35e8481794714b444cd237ec
