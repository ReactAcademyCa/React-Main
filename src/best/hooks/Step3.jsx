/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
//import Cat from '../Cat';

export default function ParentRoot() {
  return (
    <MouseProvider>
      <DisplayMouse />
    </MouseProvider>
  );
}

function MouseProvider({ children }) {
  const [mouseState, setMouseState] = useState({ x: 0, y: 0 });
  const ChildElement = children.type;
  const childProps = children.props;

  function handleMouseMove(evt) {
    setMouseState({ x: evt.clientX, y: evt.clientY });
  }

  return (
    <div style={{ height: '500px' }} onMouseMove={handleMouseMove}>
      <ChildElement {...childProps} mouse={mouseState} />
    </div>
  );
}

function DisplayMouse({ mouse }) {
  return (
    <h1>
      The mouse position is: ({mouse.x}, {mouse.y})
    </h1>
  );
}

//Functionality is now split in two components.  This is called containment.

//problem 1:
//using JSX, "key" and "ref" are not passed down to props.

//Solution
//use the following call to solve the problem
//{React.cloneElement(props.children, { mouse: mouseState })}
//

//problem 2:
//can handle only one child.

//Solution
//If we must handle an array of children,
//we must modify the code to wrap each item in the array:
//
//   React.Children.map(props.children, (child) =>
//     React.cloneElement(child, { mouse: mouseState })
//   );
//

//Problem 3:
//What happens if the child needs the prop to be named
//mousePos instead of mouse?

//Solution:
//Render Props  (see step 5)
