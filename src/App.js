import React, { Component } from "react";
import classes from "./App.module.css";
import PersonList from "./Person/PersonList";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <PersonList />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
