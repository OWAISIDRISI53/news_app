import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={5} country="in" category="sports" />
      </div>
    );
  }
}

// api key = 348a13ef35e8481794714b444cd237ec
