import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contacts from "../components/Contacts";
import AboutDev from "../components/AboutDev";

function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Portfolio />
      <AboutDev />
      <Contacts />
    </div>
  );
}

export default Home;
