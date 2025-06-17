import { GoFileCode } from "react-icons/go";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../assets/constants";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import {Link} from "react-router-dom"

function Portfolio() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Element name="portfolio" className="max-w-6xl mx-auto px-5 py-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
          <GoFileCode className="text-3xl text-teal-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-600 mt-3 max-w-lg text-center">
          Selected work showcasing my problem-solving and development skills
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <Link to={`/projects/${project.title}`} key={project.id}>
            <motion.div 
            key={project.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={`/images/screenshots/${project.screen_shots[0]}`}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex gap-3">
                {project.stack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.github_url && (
                <a 
                  href={project.github_url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full hover:bg-teal-100 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="text-gray-800" />
                </a>
              )}
              {project.live_url && (
                <a 
                  href={project.live_url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 rounded-full hover:bg-teal-100 transition-colors"
                  aria-label="Live Demo"
                >
                  <FiExternalLink className="text-gray-800" />
                </a>
              )}
            </div>
          </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a 
          href="https://github.com/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-gray-700"
        >
          View more on GitHub <FiGithub />
        </a>
      </motion.div>
    </Element>
  );
}

export default Portfolio;