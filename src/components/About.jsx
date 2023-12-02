import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      {/* title section */}
      <section className="mt-12">
        <p className="text-heading text-3xl font-bold md:text-4xl lg:text-6xl">
          FULLSTACK DEVELOPER
        </p>
        <p className="text-2xl font-bold text-gray-500 text-center md:text-5xl">
          Davis Meru
        </p>
      </section>

      <section className="md:flex items-center md:mx-5 md:my-10">
        <img
          src="/images/dev.jpg"
          alt="img"
          className="object-cover md:rounded-md md:w-[600px]"
        />
        <div>
          <p className="mt-5 text-2xl px-5 mb-5 md:max-w-2xl">
            Davis is a BSc <span>Computer Science</span> graduate & also a{" "}
            <span>full stack developer</span>, with incredible skills and
            knowledge in the field of programming gained from years of practice
            and building <span>Interactive</span>, <span>Responsive</span> and
            well designed <span>UI web applications</span>.
          </p>

          <Link to={"/projects"}>
            <button className="button">Projects</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
