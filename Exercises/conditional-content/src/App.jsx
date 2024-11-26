// You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.

// Therefore, your task is to conditionally show a warning box once a user has clicked a specific button.
// Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).

// don't change the Component name "App"

import { useState } from "react";

export default function App() {

  const [isDeleting, setIsDeleting] = useState(false);

  function deleteHandler() {
    setIsDeleting(true);
  }

  function proceedHandler() {
    setIsDeleting(false);
  }

  return (
    <div>
      {isDeleting &&
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can not be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
      }
      <button id="delete-button" onClick={deleteHandler}>Delete</button>
    </div>
  );
}