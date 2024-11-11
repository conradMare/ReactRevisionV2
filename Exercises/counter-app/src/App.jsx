import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <h1>Counter App</h1>
      <h4>{count}</h4>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}