import React, { Component } from "react";
import classes from "./App.module.css";
import Persons from "../components/Person/Persons";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Persons />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
