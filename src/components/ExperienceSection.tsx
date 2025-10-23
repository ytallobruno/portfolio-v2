'use client';

import { motion } from 'framer-motion';
import { getExperienceData } from '@/data/experience';
import { ChevronRight } from 'lucide-react';

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
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Experiência & Educação
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8 sm:space-y-10"
        >
          {experiences.map((experience, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative pl-6 sm:pl-8 border-l-2 pb-8 sm:pb-10 ${
                isDark ? 'border-cyan-500/50' : 'border-cyan-500/40'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-3.5 sm:-left-4 top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-4 transition-all duration-300 ${
                  isDark 
                    ? 'bg-cyan-500 ring-gray-900' 
                    : 'bg-cyan-500 ring-white'
                }`}
              />

              {/* Content */}
              <div>
                {/* Header: Position and Company */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                  <div>
                    <h3
                      className={`text-lg sm:text-xl md:text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {experience.position}
                    </h3>
                    <p
                      className={`text-sm sm:text-base font-semibold ${
                        isDark ? 'text-cyan-400' : 'text-cyan-600'
                      }`}
                    >
                      {experience.company}
                    </p>
                  </div>
                  <p
                    className={`text-xs sm:text-sm whitespace-nowrap font-medium ${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  >
                    {experience.startDate} - {experience.endDate}
                  </p>
                </div>

                {/* Description with bullet points */}
                <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
                  {experience.description.map((desc, descIdx) => (
                    <div
                      key={descIdx}
                      className="flex gap-3 sm:gap-4"
                    >
                      <ChevronRight
                        size={16}
                        className={`flex-shrink-0 mt-0.5 sm:mt-1 ${
                          isDark ? 'text-cyan-500/60' : 'text-cyan-500/60'
                        }`}
                      />
                      <p
                        className={`text-xs sm:text-sm leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {experience.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className={`inline-flex items-center text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                        isDark
                          ? 'bg-gray-800/80 text-cyan-300 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50'
                          : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200/50 hover:border-cyan-400'
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

