import { FaGithub, FaLinkedin } from "react-icons/fa6";
function Nav() {
  return (
    <div className="border-b-[1px] p-7 flex justify-center items-center gap-3 font-semibold text-gray-700 text-sm md:gap-15">
      <section className="flex gap-3">
        <a
          target="_blank"
          href="https://github.com/Davismeru"
          className="flex items-center gap-2"
        >
          <FaGithub /> Github
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/davis-meru-a5320324a/"
          className="flex items-center gap-2"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </section>
      <a href="resume.pdf" download>
        <button className="button">Resume</button>
      </a>
    </div>
  );
}

export default Nav;
