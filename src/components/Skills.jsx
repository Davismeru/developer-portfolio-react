import { stacks, skills } from "../assets/constants";
import { motion } from "framer-motion";

function Skills() {
  // Animation variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 py-20">
      {/* Header with image */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
        >
          <img 
            src="/images/dave.jpg" 
            alt="Davis Meru" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Technologies I work with and competencies I've mastered
          </p>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tech Stack */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span className="w-4 h-4 bg-teal-500 rounded-full"></span>
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {stacks.map((stack, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-teal-50 transition-colors">
                  <stack.icon className="text-4xl text-gray-700 group-hover:text-teal-600" />
                </div>
                <span className="text-sm font-medium text-gray-600 text-center">
                  {stack.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            Core Skills
          </h3>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex items-center flex-wrap gap-3 px-4 py-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <skill.icon className="text-2xl text-blue-600" />
                <span className="font-medium text-gray-700">{skill.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;