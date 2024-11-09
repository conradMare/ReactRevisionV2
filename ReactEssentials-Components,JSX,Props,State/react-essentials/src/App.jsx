import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import componentsImg from './assets/components.png';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentsImg}
              alt="Components image"
            />
            <CoreConcept
              title="Props"
            />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
