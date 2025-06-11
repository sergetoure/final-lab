import "./App.css";
import Header from "../components/header";
import LandingSection from "../components/LandingSection.jsx";
import ProjectSection from "../components/ProjectSection.jsx";
function App() {
  return (
    <>
      <Header />
      <main className="App-main">
        <LandingSection />
        
          <ProjectSection />
        
        <section className="contact-me" id="contact-me">
          Contact me
        </section>
      </main>
      <footer className="App-footer">hello footer</footer>
    </>
  );
}

export default App;
