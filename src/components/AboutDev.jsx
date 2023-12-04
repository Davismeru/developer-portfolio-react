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

      <div className="mt-10 md:flex items-center">
        {/* dev image */}
        <section className="px-5">
          <img src="/images/davis.jpg" alt="img" className="rounded-md mb-5" />
        </section>
        {/* about dev details */}
        <div className="about-dev">
          {/* about */}
          <div>
            <p>
              Davis is just your average IT nerd who loves everything to do with
              computing, learning new stuff, mostly thing related to web
              development, learning new tech trends and ensuring that I enhance
              my skills everyday
            </p>
          </div>

          <div>
            <h1>Goals</h1>
            <p>
              My Goal is to be the best in what I do. To achieve this, I ensure
              that no day passes without learning something new. Web development
              is very broad and evolving and I have to ensure that I keep up
              with the trends so that I can deliver the best
            </p>
          </div>

          {/* blogging */}
          <div>
            <h1>Blog</h1>
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
            <h1>Education</h1>
            <p>
              My intrests and passion in technology and computing led me to
              pursuing a Bachelor's Degree in Computer Science course from 2018
              and graduated in 2023 at Garissa University, Kenya.
            </p>
          </div>
          <a href="resume.pdf" download>
            <button className="button mt-3">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutDev;
