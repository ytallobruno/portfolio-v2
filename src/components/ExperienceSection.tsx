'use client';

import { motion } from 'framer-motion';

const ExperienceSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
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

        <div className="space-y-8">
          {/* Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`relative pl-8 border-l-2 ${
              isDark ? 'border-cyan-500' : 'border-cyan-600'
            }`}
          >
            <div
              className={`absolute -left-4 top-0 w-8 h-8 rounded-full ${
                isDark ? 'bg-cyan-500' : 'bg-cyan-600'
              }`}
            />
            <h3
              className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Software Engineer
            </h3>
            <p
              className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              BTG Pactual | 2023 - Presente
            </p>
            <p
              className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Desenvolvendo soluções backend e frontend para plataforma de investimentos.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Node.js', 'React', 'TypeScript', 'AWS'].map(tech => (
                <span
                  key={tech}
                  className={`text-xs px-3 py-1 rounded-full ${
                    isDark
                      ? 'bg-gray-800 text-cyan-400'
                      : 'bg-gray-200 text-cyan-600'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

