import React from 'react';
import classes from './Person.css';

const Person = props => (
    <div className = { classes.Person }>       
        <input className = { classes.Person__input } type="text" placeholder="Change my name here..." onChange={ props.changed } />
        <p className = { classes.Person__btn } onClick={ props.clicked }>X</p>
        <h1 className = { classes.Person__title }>Hello! I'm { props.name } and I'm { props.age } years old.</h1>
    </div>
);

export default Person;