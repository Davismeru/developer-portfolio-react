import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { IoArrowUpCircle } from "react-icons/io5";
import { Element, Link } from "react-scroll";
import Contacts from "./components/Contacts";
import { useEffect, useState } from "react";
function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY > 600 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);
  return (
    <BrowserRouter>
      <div>
        <Element name="nav">
          <Nav />
        </Element>

        {/* routes to the home and projects page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:title" element={<Projects />} />
        </Routes>

        {/* contacts me section */}
        <Contacts />

        {/* scroll to top button */}
        {showTopBtn && (
          <Link
            to="nav"
            smooth={true}
            className="fixed right-10 bottom-10 text-5xl text-gray-600 cursor-pointer"
          >
            <IoArrowUpCircle />
          </Link>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
