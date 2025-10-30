'use client';

import { Github, Linkedin } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import LightRays from './LightRays';
import { useGitHubUser } from '@/hooks/useGitHubUser';
import { PROFILE } from '@/constants/profile';

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
  const { user, loading } = useGitHubUser();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.95] },
    },
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-16 px-4 sm:px-6 lg:px-8 ${
        isDark
          ? 'bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950'
          : 'bg-linear-to-b from-zinc-50 via-zinc-100 to-zinc-50 '
      }`}
    >
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor={isDark ? '#00E5FF' : '#06B6D4'}
          raysSpeed={1.0}
          lightSpread={0.8}
          rayLength={0.6}
          fadeDistance={1.0}
          saturation={3}
          followMouse={false}
          mouseInfluence={0}
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6 sm:space-y-8">
          <motion.div variants={itemVariants} className="flex justify-center">
            {loading ? (
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full ${
                  isDark ? 'bg-zinc-800' : 'bg-zinc-200'
                } animate-pulse`}
                aria-label="Carregando avatar"
              />
            ) : user?.avatar_url ? (
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full blur-xl ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-400/20'}`}
                  aria-hidden="true"
                />
                <Image
                  src={user.avatar_url}
                  alt={`Avatar de ${user.name || PROFILE.name}`}
                  width={256}
                  height={256}
                  className="relative w-48 h-48 rounded-full border-2 border-cyan-500 object-cover"
                  priority
                />
              </div>
            ) : null}
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-zinc-900'
              }`}
            >
              {user?.name || PROFILE.name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-medium ${
                isDark ? 'text-cyan-400' : 'text-cyan-600'
              }`}
            >
              {PROFILE.title}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p
              className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
                isDark ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              {user?.bio || PROFILE.bio}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className={`text-xs sm:text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              📍 {user?.location || PROFILE.location}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 sm:gap-6">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 sm:p-4 rounded-lg transition-all hover:scale-110 ${
                isDark
                  ? 'bg-zinc-800 text-zinc-400 hover:bg-cyan-500/20 hover:text-cyan-400'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-cyan-100 hover:text-cyan-600'
              }`}
              aria-label="GitHub Profile"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 sm:p-4 rounded-lg transition-all hover:scale-110 ${
                isDark
                  ? 'bg-zinc-800 text-zinc-400 hover:bg-cyan-500/20 hover:text-cyan-400'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-cyan-100 hover:text-cyan-600'
              }`}
              aria-label="LinkedIn Profile"
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
