import { useState } from "react";

export default function Counter() {
  const [increment, setIncrement] = useState(0);
  const [by, setBy] = useState(1);
  function decBy() {
    setBy(by - 1);
  }
  function incBy() {
    setBy(by + 1);
  }
  function handleDec() {
    setIncrement(increment - by);
  }
  function handleInc() {
    setIncrement(increment + by);
  }
  return (
    <div>
      Counter:{increment}
      <br />
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}> Decrement</button>
      <br />
      <button onClick={incBy}>Increase By:{by}</button>
      <button onClick={decBy}>Decrease by</button>
    </div>
  );
}
