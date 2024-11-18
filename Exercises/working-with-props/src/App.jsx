import { CourseGoal } from "./components/CourseGoal.jsx";

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        <CourseGoal
          title="Learn React"
          description="In-depth."
        />
        <CourseGoal
          title="Master React"
          description="Change the world."
        />
      </ul>
    </div>
  );
}

export default App;