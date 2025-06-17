import React, {useState, useRef} from 'react'
import { FaGithub, FaLinkedin, FaMobileAlt, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { IoPlay, IoPause } from "react-icons/io5";

function Contacts() {
  const contactMethods = [
    {
      icon: <FaMobileAlt className="text-teal-500 text-xl" />,
      label: "Phone",
      value: "+254 717 214 046",
      href: "tel:+254717214046"
    },
    {
      icon: <FaWhatsapp className="text-green-500 text-xl" />,
      label: "WhatsApp",
      value: "+254 717 214 046",
      href: "https://wa.me/254717214046"
    },
    {
      icon: <GoMail className="text-red-500 text-xl" />,
      label: "Email",
      value: "davismeru911@gmail.com",
      href: "mailto:davismeru911@gmail.com"
    },
    {
      icon: <FaGithub className="text-gray-800 text-xl" />,
      label: "GitHub",
      value: "Davismeru",
      href: "https://github.com/Davismeru"
    },
    {
      icon: <FaLinkedin className="text-blue-600 text-xl" />,
      label: "LinkedIn",
      value: "Davis Meru",
      href: "https://www.linkedin.com/in/davis-meru-a5320324a"
    }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16"
      >
        <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
          <GoMail className="text-3xl text-teal-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-600 mt-3 text-center max-w-lg">
          Have a project in mind or want to connect? Reach out through any of these channels.
        </p>
      </motion.div>

      {/* Contact Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
          <form
            target="_blank"
            action="https://formsubmit.co/0b891472a1e1accef4306cd0d5ea54bf"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                placeholder="Hello Davis, I'd like to talk about..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md"
            >
              Send Message <FiSend />
            </button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-5">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  whileHover={{ x: 5 }}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-teal-50 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{method.label}</p>
                    <p className="font-medium text-gray-800 group-hover:text-teal-600 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* intro video */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">My Workflow</h3>
        <div 
          className="relative max-w-2xl mx-auto cursor-pointer rounded-xl shadow-lg overflow-hidden"
          onClick={handlePlay}
        >
          <video
            ref={videoRef}
            src="/intro.mp4"
            className="w-full"
          />
          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <IoPlay className="text-white text-4xl" />
            </div>
          )}
        </div>
        <p className="mt-4 text-gray-500">Click to {isPlaying ? 'pause' : 'play'} intro</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contacts;