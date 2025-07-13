import { FaGraduationCap, FaBook, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

// Timeline data
const timelineItems = [
  { year: "2018", event: "Started Computer Science degree" },
  { year: "2020", event: "First freelance web project" },
  { year: "2022", event: "Internship at Tech Company" },
  { year: "2023", event: "Graduated with BSc in CS" },
];

function AboutDev() {

  const sections = [
    {
      icon: <FaRocket className="text-teal-500 text-2xl" />,
      title: "Who I Am",
      content:
        "A passionate full-stack developer and lifelong learner obsessed with web technologies. I thrive at the intersection of creativity and logic, building solutions that are both beautiful and functional.",
    },
    {
      icon: <FaRocket className="text-blue-500 text-2xl" />,
      title: "My Goals",
      content:
        "To master the art of building intuitive, performant applications while staying ahead of tech trends. I dedicate time daily to learning - whether it's a new framework, design pattern, or optimization technique.",
    },
    {
      icon: <FaBook className="text-purple-500 text-2xl" />,
      title: "Blogging",
      content:
        "I share my learning journey through articles on web development, AI, and tech trends. Writing helps me solidify knowledge while contributing to the community.",
      link: {
        text: "Visit My Blog",
        url: "https://techcorner254.blogspot.com/",
      },
    },
    {
      icon: <FaGraduationCap className="text-orange-500 text-2xl" />,
      title: "Education",
      content:
        "BSc in Computer Science from Garissa University (2018-2023). My academic journey fueled my passion for solving real-world problems through technology.",
    },
  ];

  return (
    <section
      id="about-dev"
      className="max-w-6xl mx-auto px-5 py-20 bg-gray-50 rounded-xl my-10"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-8 mb-16"
      >
        <div className="relative group w-32 h-32 md:w-40 md:h-40">
          <img
            src="/images/nerd.jpg"
            alt="Davis Meru"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
          />
          <div className="absolute inset-0 rounded-full border-2 border-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
            Beyond the Code
          </h2>
          <p className="text-gray-600 mt-3">
            Get to know the person behind the commits
          </p>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/davis.jpg"
              alt="Davis working"
              className="rounded-xl shadow-md w-full h-auto object-cover border border-gray-200"
            />
          </motion.div>

          {/* Tech Passion Meter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
              Current Tech Focus
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Android/IOS development(React Native)</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Full Stack Development</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Coding Content Creation</span>
                  <span>30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Info Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-teal-200 transition-all"
            >
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-gray-50 rounded-full">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{section.content}</p>
                  {section.link && (
                    <a
                      href={section.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-800 font-medium"
                    >
                      {section.link.text} →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Milestone Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              Career Timeline
            </h3>
            <div className="border-l-2 border-gray-200 pl-6 space-y-8">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-teal-500 border-4 border-white"></div>
                  <p className="text-sm text-gray-500">{item.year}</p>
                  <p className="font-medium">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md w-full justify-center"
            >
              Download Full Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutDev;
