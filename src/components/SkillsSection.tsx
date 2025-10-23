'use client';

import { motion } from 'framer-motion';

const SkillsSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux']
    }
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="skills"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-950' : 'bg-white'
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
          Habilidades
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-900' : 'bg-gray-50'
              }`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}
              >
                {category.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    variants={itemVariants}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400'
                        : 'bg-gray-200 text-gray-700 hover:bg-cyan-100 hover:text-cyan-600'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

