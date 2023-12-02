import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:title" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
