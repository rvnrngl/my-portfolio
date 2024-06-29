import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { WorkExperience } from "./components/WorkExperience";
import { MySkills } from "./components/MySkills";

function App() {
  return (
    <>
      <div className="text-headline">
        <NavBar />
        <Header />
        <Home />
        <About />
        <WorkExperience />
        <MySkills />
        {/* <Skills /> */}
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
