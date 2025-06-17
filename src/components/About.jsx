import React, { useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 py-20">
      {/* Hero Title */}
      <div className="text-center mb-16">
        <p className="text-xl md:text-2xl text-gray-600 mt-4">
          Fullstack Developer & Computer Science Graduate
        </p>
      </div>

      {/* Bio + Image */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Image (with subtle border gradient) */}
        <div className="relative group md:w-1/2">
          <img
            src="/images/dev.jpg"
            alt="Davis Meru"
            className="rounded-xl shadow-xl w-full h-auto object-cover border-2 border-transparent group-hover:border-teal-300 transition-all duration-300"
          />
          {/* Social links overlay (optional) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <a href="https://github.com/Davismeru" target="_blank" className="bg-white p-2 rounded-full shadow-lg">
              <FaGithub className="text-gray-800" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="bg-white p-2 rounded-full shadow-lg">
              <FaLinkedin className="text-blue-600" />
            </a>
          </div>
        </div>

        {/* Bio Text */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
  I’m a <span className="font-semibold text-teal-600">passionate full-stack developer</span> with a <span className="font-semibold text-blue-600">BSc in Computer Science</span>, specializing in building <span className="font-semibold text-purple-600">scalable web applications</span> that marry aesthetics with functionality. Over the past few years, I’ve honed my skills in <span className="font-semibold">JavaScript, React, Node.js, and modern CSS</span>, delivering solutions that are <span className="font-semibold text-green-600">performant</span>, <span className="font-semibold text-pink-600">accessible</span>, and <span className="font-semibold text-orange-600">user-centric</span>.
  <br /><br />
  When I’m not coding, I contribute to <span className="font-semibold text-yellow-600">open-source projects</span>, write <span className="font-semibold italic">tech blogs</span>, or explore new ways to blend <span className="font-semibold text-indigo-600">UI/UX principles</span> with <span className="font-semibold text-red-600">clean architecture</span>. Let’s build something amazing together!
</p>
          <div className="flex flex-wrap gap-4">
            <ScrollLink to="portfolio" smooth={true} duration={500}>
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-all shadow-lg">
                View Projects
              </button>
            </ScrollLink>
            <a href="/resume.pdf" download className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;