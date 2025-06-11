import "./App.css";
import Header from "../components/header";
import LandingSection from "../components/LandingSection.jsx";
import ProjectSection from "../components/ProjectSection.jsx";
import ContactMe from "../components/ContactMe.jsx";
function App() {
  return (
    <>
      <Header />
      <main className="App-main">
        <LandingSection />
        
          <ProjectSection />

        <ContactMe />
      </main>
      <footer className="App-footer">hello footer</footer>
    </>
  );
}

export default App;
