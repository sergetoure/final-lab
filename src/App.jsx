import "./App.css";
import Header from "../components/header";
import LandingSection from "../components/LandingSection.jsx";
function App() {
  return (
    <>
      <Header />
      <main className="App-main">
        <LandingSection />
        <section className="project" id="project">
          feature projects
        </section>
        <section className="contact-me" id="contact-me">
          Contact me
        </section>
      </main>
      <footer className="App-footer">hello footer</footer>
    </>
  );
}

export default App;
