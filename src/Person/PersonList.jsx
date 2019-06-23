import React, { Component } from "react";
import classes from "./../App.module.css";
import Person from "./Person";

class PersonList extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // Name Change
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  // Delete Person
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // Toggle Person
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer"
    //   this hover selector provide by RADIUM
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    let persons = null;
    let btnClass = "";
    // Show Person
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    //
    const assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
      <div>
        <h1>React App Exercise | Maximillian </h1>
        <p className={assignClasses.join(" ")}>This is really working!</p>

        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default PersonList;
