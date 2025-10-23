'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
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
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${
        isDark ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-900' : 'bg-white'
      }`}
    >
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor={isDark ? '#06B6D4' : '#0891B2'}
          raysSpeed={0.8}
          lightSpread={0.6}
          rayLength={1.5}
          fadeDistance={1.2}
          saturation={0.8}
          followMouse={true}
          mouseInfluence={0.08}
          className="opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="flex justify-center">
            {loading ? (
              <div
                className={`w-32 h-32 rounded-full ${
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
                  className="relative w-32 h-32 rounded-full border-2 border-cyan-500 object-cover"
                />
              </div>
            ) : null}
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {user?.name || 'Ytallo Bruno'}
            </h1>
          </motion.div>

          {/* Title/Stack */}
          <motion.div variants={itemVariants}>
            <p
              className={`text-xl md:text-2xl font-medium ${
                isDark ? 'text-cyan-400' : 'text-cyan-600'
              }`}
            >
              Software Engineer | Node.js & React
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <p
              className={`text-lg max-w-2xl mx-auto ${
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
                className={`text-sm ${
                  isDark ? 'text-gray-500' : 'text-gray-500'
                }`}
              >
                📍 {user.location}
              </p>
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-6">
            {user?.html_url && (
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-800 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400'
                    : 'bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-600'
                }`}
              >
                <Github size={24} />
              </a>
            )}
            <a
              href="https://linkedin.com/in/ytallobruno"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400'
                  : 'bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-600'
              }`}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className={`p-3 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-400'
                  : 'bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-600'
              }`}
            >
              <Mail size={24} />
            </a>
          </motion.div>


        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            isDark ? 'border-gray-600' : 'border-gray-400'
          }`}
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-2 rounded-full mt-2 ${
              isDark ? 'bg-cyan-400' : 'bg-cyan-600'
            }`}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

