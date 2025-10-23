'use client';

import { motion } from 'framer-motion';
import { getSkillCategories } from '@/data/skills';
import * as Icons from 'lucide-react';

const SkillsSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const skillCategories = getSkillCategories();

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'Code': <Icons.Code size={24} className="sm:w-7 sm:h-7" />,
      'Globe': <Icons.Globe size={24} className="sm:w-7 sm:h-7" />,
      'Cloud': <Icons.Cloud size={24} className="sm:w-7 sm:h-7" />,
      'Database': <Icons.Database size={24} className="sm:w-7 sm:h-7" />,
      'GitBranch': <Icons.GitBranch size={24} className="sm:w-7 sm:h-7" />,
      'Webhook': <Icons.Webhook size={24} className="sm:w-7 sm:h-7" />,
      'Box': <Icons.Box size={24} className="sm:w-7 sm:h-7" />,
      'Briefcase': <Icons.Briefcase size={24} className="sm:w-7 sm:h-7" />,
    };
    return iconMap[iconName] || <Icons.Code size={24} className="sm:w-7 sm:h-7" />;
  };

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
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
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
          Habilidades
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`group relative overflow-hidden rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50' 
                  : 'bg-gray-50 border border-gray-300 hover:border-cyan-500'
              }`}
            >
              {/* Background gradient effect on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark 
                  ? 'bg-gradient-to-br from-cyan-500/5 to-transparent' 
                  : 'bg-gradient-to-br from-cyan-400/5 to-transparent'
              }`} />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className={`p-2 sm:p-3 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30 group-hover:text-cyan-300' 
                      : 'bg-cyan-200 text-cyan-700 group-hover:bg-cyan-300'
                  }`}>
                    {getIcon(category.icon)}
                  </div>
                  <h3
                    className={`text-xs sm:text-lg font-bold transition-colors duration-300 ${
                      isDark 
                        ? 'text-white group-hover:text-cyan-300' 
                        : 'text-gray-800 group-hover:text-cyan-700'
                    }`}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="flex flex-wrap gap-1.5 sm:gap-2"
                >
                  {category.skills.map((skill: string, skillIdx: number) => (
                    <motion.span
                      key={skillIdx}
                      variants={itemVariants}
                      className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-110 cursor-default ${
                        isDark
                          ? 'bg-gray-700/60 text-cyan-300 hover:bg-cyan-500/30 hover:text-cyan-200'
                          : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200 hover:text-cyan-800'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

