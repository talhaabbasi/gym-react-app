import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excercises from "../Excercises";
import { excercises, muscles } from "../store";

class App extends Component {
  state = { excercises };
  getExcercisesByMuscles() {
    return Object.entries(
      this.state.excercises.reduce((excercises, excercise) => {
        const { muscles } = excercise;
        excercises[muscles] = excercises[muscles]
          ? [...excercises[muscles], excercise]
          : [excercise];
        return excercises;
      }, {})
    );
  }
  render() {
    const excercises = this.getExcercisesByMuscles();
    console.log(this.getExcercisesByMuscles());
    return (
      <Fragment>
        <Header />
        <Excercises excercises={excercises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}

export default App;
