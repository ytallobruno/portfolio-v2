'use client';

import { motion } from 'framer-motion';
import { getProjects } from '@/data/projects';
import Image from 'next/image';

const ProjectsSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const projects = getProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center ${
            isDark ? 'text-white' : 'text-zinc-900'
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
              className={`group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${
                isDark
                  ? 'bg-linear-to-br from-zinc-800 to-zinc-800/50 border border-zinc-700/50 '
                  : 'bg-white border border-zinc-300 hover:border-cyan-500'
              }`}
            >
              {/* Image */}
              <div
                className={`h-40 sm:h-48 overflow-hidden relative bg-linear-to-br ${
                  isDark ? 'from-zinc-800 to-zinc-700' : 'from-zinc-200 to-zinc-100'
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  width={500}
                  height={300}
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col grow">
                <h3 className={`text-lg sm:text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {project.description}
                </p>
                <div className="flex gap-3 sm:gap-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2.5 sm:py-3 px-4 rounded-lg text-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isDark
                        ? 'bg-zinc-900 text-cyan-400 border border-zinc-700 hover:bg-cyan-900 hover:border-cyan-900 hover:text-cyan-300'
                        : 'bg-zinc-100 text-zinc-700 border border-zinc-300 hover:bg-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-2.5 sm:py-3 px-4 rounded-lg text-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isDark
                        ? 'bg-cyan-500 text-zinc-900 border border-cyan-500 hover:bg-cyan-400 hover:border-cyan-400'
                        : 'bg-cyan-600 text-white border border-cyan-600 hover:bg-cyan-700 hover:border-cyan-700'
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
