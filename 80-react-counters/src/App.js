import React, { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
/**
 * 1. Create component Counter which will have:
 * - button with class {increment}
 * - button with class {decrement}
 * - h1 element which will represent state value
 * - state should hold {counter} value(default value = 0)
 * - with buttons you should be able to in/decrement {counter} value
 *
 * 2. In App component add button with class {newCounter}
 * 3. when you click {newCounter} you should add new counter to view
 *
 * NOTE: feel free to add some CSS to style your counters.
 */

function App() {
  //   setCounter(counter + 1);
  const [countersQty, setCountersQty] = useState(0);

  const renderCounters = () => {
    const counters = [];
    for (let index = 0; index < countersQty; index++) {
      counters.push(<Counter key={index} />);
    }

    return counters;
  };

  return (
    <div className="App">
      <button onClick={() => setCountersQty(countersQty + 1)}>
        Add Counter
      </button>
      {renderCounters()}
    </div>
  );
}

export default App;
