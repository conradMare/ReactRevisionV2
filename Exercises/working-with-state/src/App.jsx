// You're working on a part of an online shop where a discounted price should be displayed on the screen once the 
// user clicked a button.

// Your task is to add an event listener to listen for clicks on the button
// that's already included in the App component.

// Upon a button click, the price should change from $100 to $75.

// Add a state value to the existing App component function and make
// sure the state value is both updated upon button clicks and output as part of the JSX code.

import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState(100);

  function handleDiscount() {
    setPrice(75);
  }

  return (
    <div className="app">
      <p data-testid="price">${price}</p>
      <button className="app-button" onClick={handleDiscount}>Apply Discount</button>
    </div>
  );
}
