import { GoFileCode } from "react-icons/go";
import { projects } from "../assets/constants";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

function Portfolio() {
  return (
    <Element className="p-3" name="portfolio">
      <div className="section-header">
        <section className="flex items-center justify-center border-[1px] text-4xl">
          <GoFileCode />
        </section>
        <h1>Portfolio</h1>
      </div>

      {/* projects */}
      <div className="projects-container">
        {projects.map((project) => (
          <section key={project.id}>
            <Link to={`/projects/${project.title}`}>
              <img
                src={`/images/screenshots/${project.screen_shots[0]}`}
                alt=""
              />

              <h1>{project.title}</h1>
            </Link>
          </section>
        ))}
      </div>
    </Element>
  );
}

export default Portfolio;
