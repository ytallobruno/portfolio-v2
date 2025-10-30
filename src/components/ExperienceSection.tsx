'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getProfessionalExperience, getEducation } from '@/data/experience';
import { ChevronRight } from 'lucide-react';
import type { Experience } from '@/data/experience';

const ExperienceSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const professionalExperiences = getProfessionalExperience();
  const education = getEducation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const renderExperienceItem = (experience: Experience, idx: number) => (
    <motion.div
      key={idx}
      variants={itemVariants}
      className={`relative pl-14 sm:pl-16 pb-8 sm:pb-10 ml-6 sm:ml-8 bg-linear-to-br from-zinc-800 to-zinc-800/5 rounded-r-xl pr-4 pt-4`}
    >
      {/* Timeline line */}
      <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${isDark ? 'bg-cyan-500/50' : 'bg-cyan-500/40'}`} />

      {/* Timeline Avatar */}
      <div className="absolute top-0 -left-6 sm:-left-8">
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ring-4 transition-all duration-300 overflow-hidden ${
            isDark ? 'bg-zinc-800 ring-zinc-950' : 'bg-white ring-zinc-50'
          }`}
        >
          <Image
            src={experience.image}
            alt={`Logo ${experience.company}`}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Header: Position and Company */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
          <div>
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              {experience.position}
            </h3>
            <p className={`text-sm sm:text-base font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              {experience.company}
            </p>
          </div>
          <p
            className={`text-xs sm:text-sm whitespace-nowrap font-medium ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}
          >
            {experience.startDate} - {experience.endDate}
          </p>
        </div>

        {/* Description with bullet points */}
        {/* <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 mb-4 sm:mb-5">
          {experience.description.map((desc, descIdx) => (
            <div key={descIdx} className="flex gap-3 sm:gap-4">
              <ChevronRight
                size={16}
                className={`shrink-0 mt-0.5 sm:mt-1 ${isDark ? 'text-cyan-500/60' : 'text-cyan-500/60'}`}
              />
              <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {desc}
              </p>
            </div>
          ))}
        </div> */}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {experience.tech.map((tech, techIdx) => (
            <span
              key={techIdx}
              className={`inline-flex items-center text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                isDark
                  ? 'bg-zinc-800/80 text-zinc-50 hover:text-cyan-100 hover:bg-cyan-500/20 border border-zinc-700/50 hover:border-cyan-500/50'
                  : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200/50 hover:border-cyan-400'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      <div className="max-w-2xl mx-auto space-y-16 sm:space-y-20">
        {/* Experiência Profissional */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Experiência Profissional
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8 sm:space-y-10"
          >
            {professionalExperiences.map((experience, idx) => renderExperienceItem(experience, idx))}
          </motion.div>
        </div>

        {/* Educação */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Educação & Formação
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-8 sm:space-y-10"
          >
            {education.map((experience, idx) => renderExperienceItem(experience, idx))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
