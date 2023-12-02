import { useParams } from "react-router-dom";
import { projects } from "../assets/constants";
import { useEffect, useState } from "react";

function Projects() {
  const params = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    projects.filter((project) => {
      if (project.title == params.title) {
        setProject(project);
      }
    });
  }, []);
  return (
    <div className="portfolio-project-container">
      {/* header */}
      <div className="project-header">
        <h1>{params.title}</h1>
      </div>

      {/* details body */}
      <div className="project-section">
        {/*image */}
        <section>
          {console.log(project)}
          {project.screen_shots && (
            <img
              src={`/images/screenshots/${project.screen_shots[0]}`}
              alt=""
            />
          )}
        </section>

        {/* project details */}
        <section>
          <p className="mb-5">{project.description}</p>

          {/* stack and tools */}
          <div className="stack-tools">
            {/* stack */}
            <section>
              <h1>Development stack</h1>
              <ul>
                {project.stack && project.stack.map((item) => <li>{item}</li>)}
              </ul>
            </section>

            {/* tools */}
            <section>
              <h1>Development tools</h1>
              <ul>
                {project.tools && project.tools.map((item) => <li>{item}</li>)}
              </ul>
            </section>
          </div>

          {/* project links */}

          <section className="project-links">
            <h1 className="font-medium underline underline-offset-4">
              Project Links
            </h1>
            {/* links */}
            <div>
              <p>
                github (client): <a href="/">https//:github.com</a>
              </p>
              <p>
                github (server): <a href="/">https//:github.com</a>
              </p>
              <p>
                live project: <a href="/">https://live.com</a>
              </p>
            </div>
          </section>
        </section>
      </div>

      {/*project screenshot screen shots */}
      <section className="mt-10 text-3xl font-semibold text-heading">
        <h1 className="mb-5">Project screenshots</h1>
        {project.screen_shots &&
          project.screen_shots.map((item) => (
            <img
              src={`/images/screenshots/${item}`}
              className="mb-10 w-[90%] object-cover"
            />
          ))}
      </section>
    </div>
  );
}

export default Projects;
