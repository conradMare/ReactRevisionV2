// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.

// The class should be applied when the <button> is clicked for the first time.

// don't change the Component name "App"
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(isActive => !isActive);
  }

  return (
    <div className="app">
      <p className={isActive ? 'active' : undefined}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
