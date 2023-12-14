import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { IoPlay, IoPause } from "react-icons/io5";

function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  // play/pause video
  const video = document.getElementById("video");
  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      video.play();
    } else {
      setIsPlaying(false);
      video.pause();
      video.end(console.log("true"));
    }
  };

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

          <ScrollLink to={"portfolio"} smooth={true}>
            <button className="button">Projects</button>
          </ScrollLink>
        </div>
      </section>

      {/* intro video */}
      <section
        className="px-5 my-10 relative cursor-pointer"
        onClick={handlePlay}
      >
        {/* play btn */}
        <section className="play-btn">{!isPlaying && <IoPlay />}</section>
        <video
          src="/intro.mp4"
          className="rounded-md md:w-[600px] shadow-2xl"
          id="video"
        />
      </section>
    </div>
  );
}

export default About;
