import IntroScreen from "./components/IntroScreen.jsx";
import AboutMe from "./components/AboutMe.jsx";
import "./App.css"
import Footer from "./components/Footer.jsx";
import MyExperience from "./components/MyExperience.jsx";
import Skills from "./components/Skills.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {

  return (
    <>
        <IntroScreen/>
        <AboutMe/>
        <MyExperience/>
        <Skills/>
        <ContactMe/>
        <Footer/>
    </>
  )
}

export default App
