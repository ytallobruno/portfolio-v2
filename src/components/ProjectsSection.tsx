'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { getProjects } from '@/data/projects';

const ProjectsSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const projects = getProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section
      id="projects"
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Projetos
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isDark ? 'bg-gray-800 border border-gray-700/50' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Image */}
              <div
                className={`h-40 sm:h-48 overflow-hidden relative bg-gradient-to-br ${
                  isDark
                    ? 'from-gray-800 to-gray-700'
                    : 'from-gray-200 to-gray-100'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className={`absolute inset-0 ${
                    isDark ? 'bg-gray-900/0' : 'bg-black/0'
                  } group-hover:${
                    isDark ? 'bg-gray-900/40' : 'bg-black/40'
                  } transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 rounded-lg transition-all transform hover:scale-110 ${
                      isDark
                        ? 'bg-cyan-500/80 hover:bg-cyan-500 text-white'
                        : 'bg-cyan-600/80 hover:bg-cyan-600 text-white'
                    }`}
                  >
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 sm:p-3 rounded-lg transition-all transform hover:scale-110 ${
                      isDark
                        ? 'bg-cyan-500/80 hover:bg-cyan-500 text-white'
                        : 'bg-cyan-600/80 hover:bg-cyan-600 text-white'
                    }`}
                  >
                    <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm mb-4 leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-3 rounded text-center text-xs sm:text-sm font-medium transition-all ${
                      isDark
                        ? 'bg-gray-700 text-cyan-400 hover:bg-cyan-500/30'
                        : 'bg-gray-100 text-cyan-700 hover:bg-gray-200'
                    }`}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2 px-3 rounded text-center text-xs sm:text-sm font-medium transition-all ${
                      isDark
                        ? 'bg-gray-700 text-cyan-400 hover:bg-cyan-500/30'
                        : 'bg-gray-100 text-cyan-700 hover:bg-gray-200'
                    }`}
                  >
                    Projeto
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

