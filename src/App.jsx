import Portfolio from "./components/portfolio";
import Nav from "./components/nav";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Project from "./components/project"
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Portfolio />
      <Skills />
      <Project/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
