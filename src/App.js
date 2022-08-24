import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  api_key = process.env.REACT_APP_API_KEY;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general"}
                  pageSize={this.pageSize}
                  apiKey={this.api_key}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"business"}
                  pageSize={this.pageSize}
                  apiKey={this.api_key}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"entertainment"}
                  pageSize={this.pageSize}
                  apiKey={this.api_key}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"health"}
                  pageSize={this.pageSize}
                  apiKey={this.api_key}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"science"}
                  pageSize={this.pageSize}
                  apiKey={this.api_key}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"sports"}
                  pageSize={this.pageSize}
                  apiKey={this.api_key}
                  country="in"
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"technology"}
                  pageSize={this.pageSize}
                  apiKey={this.api_key}
                  country="in"
                  category="technology"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general"}
                  pageSize={this.pageSize}
                  apiKey={this.api_key}
                  country="in"
                  category="general"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

// api key = 348a13ef35e8481794714b444cd237ec
