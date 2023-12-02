import { GoFileCode } from "react-icons/go";
import { projects } from "../assets/constants";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="p-3">
      <div className="section-header">
        <section className="flex items-center justify-center border-[1px] text-4xl">
          <GoFileCode />
        </section>
        <h1>Portfolio</h1>
      </div>

      {/* projects */}
      <div className="projects-container">
        {projects.map((project) => (
          <section>
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
    </div>
  );
}

export default Portfolio;
