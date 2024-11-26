// You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.

// Therefore, your task is to conditionally show a warning box once a user has clicked a specific button.
// Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).

// don't change the Component name "App"
export default function App() {
  return (
    <div>
      <div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can not be reverted!</p>
        <button>Proceed</button>
      </div>
      <button>Delete</button>
    </div>
  );
}