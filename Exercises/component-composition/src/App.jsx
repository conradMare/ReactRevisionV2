import Card from "./components/Card";

export default function App() {
  return (
    <div id="app">
      <h1 style={{ color: 'black', textAlign: 'center' }}>Available Experts</h1>
      <hr />
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}
