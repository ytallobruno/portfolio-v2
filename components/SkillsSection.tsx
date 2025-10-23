'use client';

import { motion } from 'framer-motion';
import { getSkillCategories } from '@/data/skills';
import * as Icons from 'lucide-react';

const SkillsSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const skillCategories = getSkillCategories();

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'Code': <Icons.Code size={24} />,
      'Globe': <Icons.Globe size={24} />,
      'Cloud': <Icons.Cloud size={24} />,
      'Database': <Icons.Database size={24} />,
      'GitBranch': <Icons.GitBranch size={24} />,
      'Webhook': <Icons.Webhook size={24} />,
      'Box': <Icons.Box size={24} />,
      'Briefcase': <Icons.Briefcase size={24} />,
    };
    return iconMap[iconName] || <Icons.Code size={24} />;
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
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gray-950' : 'bg-white'
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
          Habilidades
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  isDark ? 'bg-cyan-500/20' : 'bg-cyan-100'
                } text-cyan-500`}>
                  {getIcon(category.icon)}
                </div>
                <h3
                  className={`text-lg font-bold ${
                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                  }`}
                >
                  {category.name}
                </h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill: string, skillIdx: number) => (
                  <motion.span
                    key={skillIdx}
                    variants={itemVariants}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? 'bg-gray-800 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 border border-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-cyan-100 hover:text-cyan-600 border border-gray-300'
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

