import About from "./components/About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"
function App() {
  return (
      <div className="">
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Education />
        <Contacts/>
      </div>
  )
}

export default App