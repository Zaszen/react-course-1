import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' :{
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.clickHandler}>I'm a {props.name} and I am {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.inputHandler} value ={props.name}/>
        </div>
    );
}

export default Radium(person);