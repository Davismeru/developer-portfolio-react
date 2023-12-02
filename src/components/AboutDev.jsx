import { useState } from "react";
import {
  FaGolang,
  FaGraduationCap,
  FaMandalorian,
  FaPersonArrowUpFromLine,
} from "react-icons/fa6";

function AboutDev() {
  return (
    <div className="p-3">
      <div className="section-header">
        <section>
          <img src="images/nerd.jpg" alt="img" />
        </section>
        <h1>Know the dev</h1>
      </div>

      <div className="about-dev">
        {/* about */}
        <div>
          <p>
            <FaPersonArrowUpFromLine /> About Davis
          </p>
          <p>
            Davis is just your average IT nerd who loves everything to do with
            computing, learning new stuff, mostly thing related to web
            development, learning new tech trends and ensuring that I enhance my
            skills everyday
          </p>
        </div>

        <div>
          <p>
            <FaMandalorian /> Goals
          </p>
          <p>
            My Goal is to be the best in what I do. To achieve this, I ensure
            that no day passes without learning something new. Web development
            is very broad and evolving and I have to ensure that I keep up with
            the trends so that I can deliver the best
          </p>
        </div>

        {/* blogging */}
        <div>
          <p>
            <FaGolang /> Blog
          </p>
          <p>
            I'm also a blogger where I write articles on different topics
            related to technology, Artificial Intelligence, Programming and
            other tech stuff
          </p>
          <a
            href="https://techcorner254.blogspot.com/"
            target="_blank"
            className="text-blue-500 text-2xl md:text-xl"
          >
            View Blog
          </a>
        </div>

        {/* education */}
        <div>
          <p>
            <FaGraduationCap /> Education
          </p>
          <p>
            My intrests and passion in technology and computing led me to
            pursuing a Bachelor's Degree in Computer Science course from 2018
            and graduated in 2023 at Garissa University, Kenya.
          </p>
        </div>
        <a href="resume.pdf" download>
          <button className="button">Resume</button>
        </a>
      </div>
    </div>
  );
}

export default AboutDev;
