import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons: [
      {id: 1, name: 'toto', age: 20},
      {id: 2, name: 'tata', age: 22},
      {id: 3, name: 'foo', age: 24}
    ],
    showPersons: false
  }

  nameChangeHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]}
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  switchNameHandler = (newName) => {
   this.setState({
     persons: [
      {name: newName, age: 23},
      {name: 'tata', age: 25}
    ]
   })
  }

  deletePersonHandler = (personIndex) =>{
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  togglePersonHandler = () =>{
    this.setState({showPersons: !this.state.showPersons});
  }

  render() { 
    let PersonsDiv = null;
    let btnClass = '';
    if(this.state.showPersons){
      PersonsDiv= (
        <div>
          {this.state.persons.map((person, i) =>{
            return (
              <Person 
                key ={"person_" + i}
                clickHandler={this.deletePersonHandler.bind(this,i)}
                name={person.name} 
                age={person.age}
                inputHandler={(event)=>{this.nameChangeHandler(person.id, event)}}
              />
            )
          })}
        </div> 
      )    
      btnClass = classes.red; 
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>react course</h1>
          <p className={assignedClasses.join(' ')}>sub-title</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonHandler} 
          >
            Switch name 
          </button>
          {PersonsDiv}
        </div>
    );
  }
}

export default App;
