'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
}

const ProjectsSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const projects: Project[] = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3',
      technologies: ['React', 'Tailwind CSS', 'Firebase'],
      github: '#',
      live: '#'
    }
  ];

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
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Projetos
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Image Placeholder */}
              <div
                className={`h-48 ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                } flex items-center justify-center overflow-hidden relative`}
              >
                <div
                  className={`absolute inset-0 ${
                    isDark ? 'bg-gray-900/0' : 'bg-black/0'
                  } group-hover:${
                    isDark ? 'bg-gray-900/40' : 'bg-black/40'
                  } transition-all duration-300 flex items-center justify-center gap-4`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all ${
                        isDark
                          ? 'bg-gray-700 hover:bg-cyan-500'
                          : 'bg-gray-300 hover:bg-cyan-600'
                      }`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all ${
                        isDark
                          ? 'bg-gray-700 hover:bg-cyan-500'
                          : 'bg-gray-300 hover:bg-cyan-600'
                      }`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className={`text-xs px-2 py-1 rounded ${
                        isDark
                          ? 'bg-gray-700 text-cyan-400'
                          : 'bg-gray-200 text-cyan-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
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

