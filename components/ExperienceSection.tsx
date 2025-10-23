'use client';

import { motion } from 'framer-motion';
import { getExperienceData } from '@/data/experience';

const ExperienceSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const experiences = getExperienceData();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section
      id="experience"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl font-bold mb-12 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Experiência & Educação
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {experiences.map((experience, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative pl-8 border-l-2 pb-8 ${
                isDark ? 'border-cyan-500' : 'border-cyan-600'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-4 top-0 w-8 h-8 rounded-full ${
                  isDark ? 'bg-cyan-500' : 'bg-cyan-600'
                }`}
              />

              {/* Content */}
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {experience.position}
                </h3>
                <p
                  className={`text-sm font-medium ${
                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                  }`}
                >
                  {experience.company}
                </p>
                <p
                  className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {experience.startDate} - {experience.endDate}
                </p>

                {/* Description */}
                <div className="mt-4 space-y-2">
                  {experience.description.map((desc, descIdx) => (
                    <p
                      key={descIdx}
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                        isDark
                          ? 'bg-gray-800 text-cyan-400 hover:bg-cyan-500/20'
                          : 'bg-gray-200 text-cyan-600 hover:bg-cyan-100'
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

export default ExperienceSection;

