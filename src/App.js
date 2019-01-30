// @flow
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";

import OfferingsGrid from "./components/OfferingsGrid";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button variant="contained" color="primary">
            Learn React
          </Button>
        </a>
        <OfferingsGrid />
      </div>
    );
  }
}

export default App;
