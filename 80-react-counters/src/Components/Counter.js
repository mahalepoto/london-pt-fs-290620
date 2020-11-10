import React, { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);

  const incrementHandler = () => setValue(value + 1);
  const decrementHandler = () => setValue(value - 1);

  return (
    <div>
      <button className="increment" onClick={incrementHandler}>
        Increase
      </button>
      <button className="decrement" onClick={decrementHandler}>
        Decrease
      </button>
      <h1>Counter: {value}</h1>
    </div>
  );
};

export default Counter;
