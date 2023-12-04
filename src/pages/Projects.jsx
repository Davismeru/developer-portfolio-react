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
            <h1 className="font-medium underline underline-offset-4 mb-2">
              Project Links
            </h1>
            {/* links */}
            <div className="flex flex-col gap-2">
              <a href={project.github_client} target="_blank">
                github {project.github_server && "(client)"}
              </a>
              {project.github_server && (
                <a href={project.github_server} target="_blank">
                  github (server)
                </a>
              )}
              <a href={project.url} target="_blank">
                live project
              </a>
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
