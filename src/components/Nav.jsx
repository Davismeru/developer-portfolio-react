import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo or Name (Optional) */}
        <a href="/" className="text-lg font-bold text-gray-800">
          DavisMeru
        </a>

        {/* Social Links + Resume */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/Davismeru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/davis-meru-a5320324a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Resume Button (More polished) */}
          <a
            href="resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-teal-400 to-blue-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <FaFileDownload />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;