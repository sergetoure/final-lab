import "./App.scss";
import Header from "../components/header";
import LandingSection from "../components/LandingSection.jsx";
import ProjectSection from "../components/ProjectSection.jsx";
import ContactMe from "../components/ContactMe.jsx";
import Modal from "../components/Modal.jsx";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(false);
  const showModal = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsOpen(true);
  };
  return (
    <>
      <Header />
      <main className="App-main">
        <LandingSection />

        <ProjectSection />

        <ContactMe onShowModal={showModal} />
      </main>
      <footer className="App-footer">hello footer</footer>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <h2>All good!</h2>
        <p>Thanks for your submission Serge, we will get back to you shortly</p>
      </Modal>
    </>
  );
}

export default App;
