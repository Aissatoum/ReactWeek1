import React from 'react';
const person = (props) => {
    return (
        <div className="App">
    <p>Name: {props.name}</p>
    <p>Number: {props.number}</p>
     <p>age: {props.age}</p>
     </div>
    );
};
export default person;