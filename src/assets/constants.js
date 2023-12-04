import { IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJsonwebtokens,
  SiHtml5,
  SiRedux,
  SiGreensock,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGithubAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";

// stacks
export const stacks = [
  {
    icon: IoLogoReact,
    title: "React",
  },

  {
    icon: IoLogoNodejs,
    title: "NodeJs",
  },

  {
    icon: SiExpress,
    title: "Express",
  },

  {
    icon: SiMongodb,
    title: "MongoDB",
  },

  {
    icon: GrMysql,
    title: "MySQL",
  },

  {
    icon: SiTailwindcss,
    title: "Tailwind",
  },
];

// skills
export const skills = [
  {
    icon: SiHtml5,
    title: "HTML, CSS, JavaScript",
  },

  {
    icon: SiJsonwebtokens,
    title: "JWT authentication",
  },

  {
    icon: SiRedux,
    title: "State Management",
  },

  {
    icon: FaGithubAlt,
    title: "Git and GitHub",
  },

  {
    icon: DiResponsive,
    title: "Responsive designs",
  },

  {
    icon: SiGreensock,
    title: "GSAP animations",
  },
];

// portfolio projects
export const projects = [
  {
    id: 1,
    title: "Instamedia",
    description:
      "Instamedia is a fullstack social media web application that allows its users to make posts and also like and comments on other users's posts",
    github_client: "https://github.com/Davismeru/instapost_client",
    github_server: "https://github.com/Davismeru/instapost_server",
    url: "https://instamedia.pages.dev",
    stack: ["React", "Node Js", "Express Js", "MySQL"],
    tools: [
      "Render",
      "Clever cloud",
      "Cloudflare pages",
      "Sequelize ORM",
      "JSON Web Token",
      "Multer",
      "Bcrypt",
    ],
    screen_shots: [
      "instamedia_1.jpg",
      "instamedia_2.jpg",
      "instamedia_3.jpg",
      "instamedia_4.jpg",
    ],
  },

  {
    id: 2,
    title: "Survey App",
    description:
      "Survey app is a multi_step full stack web application that prompts its users to enter their data from set fields and also upload neccesary files ",
    github_client: "https://github.com/Davismeru/simple-survey-client",
    github_server: "https://github.com/Davismeru/simple-survey-api",
    url: "https://surveyapp.pages.dev",
    stack: ["React", "Node Js", "Express Js", "MySQL"],
    tools: [
      "Render",
      "Clever cloud",
      "Cloudflare pages",
      "Sequelize ORM",
      "Multer",
    ],
    screen_shots: [
      "survey_1.jpg",
      "survey_2.jpg",
      "survey_3.jpg",
      "survey_4.jpg",
    ],
  },

  {
    id: 3,
    title: "Yflix",
    description:
      "Yflix is a Video streaming platform that allows it's users to stream and download youtube videos",
    github_client: "https://github.com/Davismeru/YFLIX-remastered-react",
    github_server: "",
    url: "https://yflix.pages.dev",
    stack: ["React"],
    tools: ["YouTube V3 API", "React Player library", "Tailwind"],
    screen_shots: [
      "yflix_1.jpg",
      "yflix_2.jpg",
      "yflix_3.jpg",
      "yflix_4.jpg",
      "yflix_5.jpg",
      "yflix_6.jpg",
    ],
  },

  {
    id: 4,
    title: "SummarizeAI",
    description:
      "SummariserAI is an AI based web application that summarises the contents of any website using Artificial Intelligence by just passing the url of the website",
    github_client: "https://github.com/Davismeru/summariseAI-react",
    github_server: "",
    url: "https://summeriseai.pages.dev/",
    stack: ["React"],
    tools: ["Article Extractor and Summarizer API", "Redux", "Tailwind"],
    screen_shots: ["ai_1.jpg", "ai_2.jpg"],
  },

  {
    id: 5,
    title: "Sweet Recipes",
    description:
      "Sweet Recipes is a web application that showcases different recipes from diffrerent Cuisines from all over the world",
    github_client: "https://github.com/Davismeru/sweet-recipes-react",
    github_server: "",
    url: "https://sweetrecipes.pages.dev",
    stack: ["React"],
    tools: [
      "Spoonacular Food API",
      "Framer motion",
      "Styled components",
      "React-Router_DOM",
    ],
    screen_shots: ["recipes_1.jpg", "recipes_2.jpg", "recipes_3.jpg"],
  },

  {
    id: 6,
    title: "NorthAgriTech Organisation",
    description:
      "NorthAgritech is a startup company whose main agenda is enhancing agriculture in arid and semi-arid areas of Kenya using technology",
    github_client: "https://github.com/Davismeru/northagritech",
    github_server: "",
    url: "https://northagritech.pages.dev",
    stack: ["React"],
    tools: ["Tailwind", "Form SUmbit tool"],
    screen_shots: ["north_1.jpg", "north_2.jpg", "north_3.jpg"],
  },

  {
    id: 7,
    title: "Music Player Web Application",
    description:
      "A simple web based music player with functionality such as Next and previous music toggle, play and pause, shuffle through all songs, repeat one song, etc",
    github_client: "https://github.com/Davismeru/Music-Player-Web-application",
    github_server: "",
    url: "https://davismeru.github.io/Music-Player-Web-application/",
    stack: ["HTML5", "CSS3", "JavaScript"],
    tools: ["Giphy", "UnSplash"],
    screen_shots: ["music_1.jpg", "music_2.jpg", "music_3.jpg"],
  },

  {
    id: 8,
    title: "Royce Scents",
    description:
      "Royce Scents is an individual-owned company that deals with selling of products such as perfumes, bracelets, shades, etc. This website simply shows some of the products that the company sells.",
    github_client: "https://github.com/Davismeru/ROYCE-PERFUME-STORE",
    github_server: "",
    url: "https://davismeru.github.io/ROYCE-PERFUME-STORE/",
    stack: ["HTML5", "CSS3", "JavaScript"],
    tools: ["UnSplash", "JSON raw data", "Fontawesome 6"],
    screen_shots: ["royce_1.jpg", "royce_2.jpg", "royce_3.jpg"],
  },
];
