import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excercises from "../Excercises";
import { Muscles, Excercises } from "../store";

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Header />
        <Excercises />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
