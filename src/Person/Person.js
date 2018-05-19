import React from 'react';

import classes from './Person.css';

const person = (props) => {
   
    return (
        <div className={classes.Person} >
            <p onClick={props.clickHandler}>I'm a {props.name} and I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputHandler} value ={props.name}/>
        </div>
    );
}

export default person;