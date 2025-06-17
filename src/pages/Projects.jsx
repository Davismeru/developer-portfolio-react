import { useParams } from "react-router-dom";
import { projects } from "../assets/constants";
import { useEffect, useState } from "react";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectDetail() {
  const { title } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.title === title);
    setProject(foundProject);
  }, [title]);


// Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []); 

  if (!project) return <div className="text-center py-20">Loading project...</div>;

  return (
    <div className="max-w-6xl mx-auto px-5 py-12 md:py-20">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Link 
          to="/" 
          className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium"
        >
          <FiArrowLeft /> Back
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl">{project.tagline || project.description}</p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Screenshot */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
            {project.screen_shots?.[0] && (
              <img
                src={`/images/screenshots/${project.screen_shots[0]}`}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-contain"
              />
            )}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mt-6">
            {project.github_client && (
              <motion.a
                whileHover={{ y: -2 }}
                href={project.github_client}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FiGithub /> GitHub {project.github_server && "(Client)"}
              </motion.a>
            )}
            {project.github_server && (
              <motion.a
                whileHover={{ y: -2 }}
                href={project.github_server}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FiGithub /> GitHub (Server)
              </motion.a>
            )}
            {project.url && (
              <motion.a
                whileHover={{ y: -2 }}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <FiExternalLink /> Live Demo
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Project Description */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack?.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Development Tools */}
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Development Tools</h2>
            <ul className="space-y-2">
              {project.tools?.map((tool, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-gray-700">{tool}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Additional Screenshots */}
      {project.screen_shots?.length > 1 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screen_shots.slice(1).map((screenshot, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <img
                  src={`/images/screenshots/${screenshot}`}
                  alt={`${project.title} screenshot ${index + 2}`}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}
    </div>
  );
}

export default ProjectDetail;