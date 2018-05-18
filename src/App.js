import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
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
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
    }
    let PersonsDiv= null

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
      style.backgroundColor = 'red';
      style[':hover'] =  {
          backgroundColor: 'pink',
          color: 'black'
        }
    }

    const classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>react course</h1>
          <p className={classes.join(' ')}>sub-title</p>
          <button 
            style={style}
            onClick={this.togglePersonHandler} 
          >
            Switch name 
          </button>
          {PersonsDiv}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
