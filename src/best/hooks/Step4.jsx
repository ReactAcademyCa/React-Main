/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
//import Cat from '../Cat';
//import withCat from '../with-cat';

export default function ParentRoot() {
  return <DisplayPosition />;
}

//Component DisplayMouse is wrapped with the HOC that
//provides mouse coordinates to DisplayMouse
var DisplayPosition = withMouse(DisplayMouse);

//This is a HOC, a higher-order component.
//The goal is to provide mouse coordinates to Component
function withMouse(Component) {
  function WithMouse(props) {
    const [mouseState, setMouseState] = useState({ x: 0, y: 0 });

    function handleMouseMove(evt) {
      setMouseState({ x: evt.clientX, y: evt.clientY });
    }

    return (
      <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
        <Component {...props} mouse={mouseState} />
      </div>
    );
  }

  //Convention to help with HOC debugging
  WithMouse.displayName = `WithMouse(${
    Component.displayName || Component.name || 'Component'
  })`;

  //return component
  return WithMouse;
}

//regular component
function DisplayMouse({ mouse }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//DEFINITIONS:

//Higher order Function:
//Function, takes a fn, and returns a new function that
//wraps the original one with added functionality

//Higher Order Component:
//Function, takes a "child" component,
//returns a parent component to push props down
//to this child component

//Probem: not easy to wrap multiple components at the same time.
