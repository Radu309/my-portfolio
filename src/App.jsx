import IntroScreen from "./components/IntroScreen.jsx";
import AboutMe from "./components/AboutMe.jsx";
import "./App.css"
import Footer from "./components/Footer.jsx";
import MyExperience from "./components/MyExperience.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";
import Projects from "./components/Projects.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
    <>
        <Header />
        <IntroScreen/>
        <AboutMe/>
        <MyExperience/>
        <Skills/>
        <Projects/>
        <ContactMe/>
        <Footer/>
    </>
  )
}

export default App
