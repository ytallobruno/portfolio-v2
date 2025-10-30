'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`transition-colors duration-300 ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
        <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
        <HeroSection isDark={isDark} />
        <ExperienceSection isDark={isDark} />
        <SkillsSection isDark={isDark} />
        <ProjectsSection isDark={isDark} />
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}
