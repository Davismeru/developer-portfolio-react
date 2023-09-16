import { FaGithub, FaGlobe } from "react-icons/fa6";
import { GoFileCode, GoGlobe } from "react-icons/go";

function Portfolio() {
  const portfolioItems = [
    {
      title: "YFlix",
      imgSrc: "project_2.JPG",
      description: `WatchFlix is a Video streaming platform that allows it's users to stream and download youtube videos`,
      tools: [
        "React Js",
        "Youtube V3 API",
        "Tailwind CSS",
        "Vite",
        "React Player library",
        "React Router",
      ],
      projectLink: "https://yflix.pages.dev/",
      gitHubLink: "https://github.com/Davismeru/YFLIX-remastered-react",
    },

    {
      title: "SummariserAI",
      imgSrc: "project_1.JPG",
      description: `SummariserAI is an AI based web application that summarises the contents of any website using Artificial Intelligence by just passing the url of the website`,
      tools: [
        "React Js",
        "Vite",
        "Summariser API",
        "Tailwind CSS",
        "React Redux(Redux-toolkit)",
      ],
      projectLink: "https://summeriseai.pages.dev/",
      gitHubLink: "https://github.com/Davismeru/summariseAI-react",
    },

    {
      title: "Sweet Recipes",
      imgSrc: "project_3.JPG",
      description: `Sweet Recipes is a web application that showcases different recipes from diffrerent Cuisines from all over the world`,
      tools: [
        "React Js",
        "Spoonacular Food API",
        "Styled Components",
        "Framer Motion",
        "React Router",
      ],
      projectLink: "https://sweetrecipes.pages.dev/",
      gitHubLink: "https://github.com/Davismeru/sweet-recipes-react",
    },

    {
      title: "Lyrics Arena",
      imgSrc: "project_4.JPG",
      description: `Lyrics Arena is a lyrics web application that allows its users to save, delete and preview lyrics to their favourites songs `,
      tools: [
        "React",
        "JSON Server",
        "React Router",
        "Fontawesome Icons",
        "Render (hosting the JSON Server)",
      ],
      projectLink: "https://lyricsarena.pages.dev/",
      gitHubLink: "https://github.com/Davismeru/lyrics-arena-react",
    },
  ];
  return (
    <div className="p-3">
      <div className="flex items-center gap-5 border p-2 rounded-md mb-3">
        <section className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center border-[1px] text-4xl text-green-800">
          <GoFileCode />
        </section>
        <h1 className="text-xl font-bold text-cyan-600 md:text-3xl lg:text-4xl">
          Portfolio
        </h1>
      </div>

      <div className="text-lg mb-3 md:ml-28">
        <p>
          Here are some of the few projects thats I have worked on and a list of
          all the tools that were used in each project
        </p>
      </div>

      {/* portfolio projects container */}
      <div className="md:ml-28">
        {portfolioItems.map((item, index) => {
          return (
            <>
              {/* single project */}
              <h1
                className="text-xl my-2 font-semibold text-green-600 md:text-2xl"
                key={index}
              >
                {item.title}
              </h1>
              <div key={item.title} className="mb-5 md:flex md:gap-10">
                {/* project image */}
                <section className="rounded-md p-[1px] mb-5 bg-gray-200 md:w-[50%]">
                  <img
                    src={`images/${item.imgSrc}`}
                    alt=""
                    className="w-full h-full object-contain rounded-[inherit]"
                  />
                </section>

                {/* project details */}
                <section className="text-md md:max-w-md">
                  <p>{item.description}</p>
                  <div className="my-5">
                    <h1 className="text-xl font-semibold">Development Tools</h1>
                    <ul className="list-disc list-inside">
                      {item.tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                      })}
                    </ul>
                  </div>

                  <div className="text-blue-500 text-sm">
                    <a
                      href={item.projectLink}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <FaGlobe /> View Live Project
                    </a>
                    <a
                      href={item.gitHubLink}
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <FaGithub />
                      View Project on Github
                    </a>
                  </div>
                </section>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
