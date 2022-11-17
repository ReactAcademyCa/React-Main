import React from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

//simple use of state.  No effects (so no save or restore of the counter value)
export default function Counter({ init }) {
  const [count, setCount] = React.useState(+init || 1);

  function increment(incr) {
    setCount(count + incr);
  }

  function change(evt) {
    if (Number.isInteger(+evt.target.value)) {
      setCount(+evt.target.value);
    }
  }

  return (
    <>
      <h1>The count is: {count} </h1>
      <MyButton onIncrement={increment} value={1} />
      <MyButton onIncrement={increment} value={-10} />
      <MyButton onIncrement={increment} value={100} />
      <MyTextbox value={count} onChange={change} />
    </>
  );
}
