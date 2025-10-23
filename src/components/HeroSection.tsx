'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import LightRays from './LightRays';

interface GitHubUser {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  location: string;
}

const HeroSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ytallobruno');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching GitHub user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubUser();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-16 px-4 sm:px-6 lg:px-8 ${
        isDark ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor={isDark ? '#00E5FF' : '#06B6D4'}
          raysSpeed={1.0}
          lightSpread={0.6}
          rayLength={1.0}
          fadeDistance={1.0}
          saturation={3}
          followMouse={false}
          mouseInfluence={0}
          className="opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="flex justify-center">
            {loading ? (
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full ${
                  isDark ? 'bg-gray-800' : 'bg-gray-200'
                } animate-pulse`}
              />
            ) : user ? (
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full blur-xl ${
                    isDark ? 'bg-cyan-500/20' : 'bg-cyan-400/20'
                  }`}
                />
                <img
                  src={user.avatar_url}
                  alt={user.name}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-2 border-cyan-500 object-cover"
                />
              </div>
            ) : null}
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {user?.name || 'Ytallo Bruno'}
            </h1>
          </motion.div>

          {/* Title/Stack */}
          <motion.div variants={itemVariants}>
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium ${
                isDark ? 'text-cyan-400' : 'text-cyan-600'
              }`}
            >
              Software Engineer | Node.js & React
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <p
              className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {user?.bio ||
                'Desenvolvedor fullstack com mais de 3 anos de experiência em desenvolvimento web, com foco em tecnologias modernas e boas práticas de código.'}
            </p>
          </motion.div>

          {/* Location */}
          {user?.location && (
            <motion.div variants={itemVariants}>
              <p
                className={`text-xs sm:text-sm ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}
              >
                📍 {user.location}
              </p>
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/ytallobruno"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 sm:p-4 rounded-lg transition-all hover:scale-110 ${
                isDark
                  ? 'bg-gray-800 text-gray-400 hover:bg-cyan-500/20 hover:text-cyan-400'
                  : 'bg-gray-100 text-gray-600 hover:bg-cyan-100 hover:text-cyan-600'
              }`}
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ytallobruno"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 sm:p-4 rounded-lg transition-all hover:scale-110 ${
                isDark
                  ? 'bg-gray-800 text-gray-400 hover:bg-cyan-500/20 hover:text-cyan-400'
                  : 'bg-gray-100 text-gray-600 hover:bg-cyan-100 hover:text-cyan-600'
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

