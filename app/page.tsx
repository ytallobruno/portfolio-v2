'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Verificar preferência do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}>
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

