'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, onThemeToggle }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar seção ativa
      const sections = ['hero', 'experience', 'skills', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experiência' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800'
            : 'bg-white/80 backdrop-blur-md border-b border-zinc-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link href="#hero" onClick={() => scrollToSection('hero')}>
              <span className={`text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                YB
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors relative group cursor-pointer ${
                  activeSection === item.id
                    ? isDark
                      ? 'text-cyan-400'
                      : 'text-cyan-600'
                    : isDark
                      ? 'text-zinc-400 hover:text-white'
                      : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                    activeSection === item.id
                      ? isDark
                        ? 'bg-cyan-400'
                        : 'bg-cyan-600'
                      : 'bg-transparent group-hover:w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* <button
            onClick={onThemeToggle}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? 'bg-zinc-800 hover:bg-zinc-700 text-yellow-400' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}
        </div>

        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t ${
              isDark ? 'border-zinc-800 bg-zinc-900/95' : 'border-zinc-200 bg-white/95'
            }`}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? isDark
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'bg-cyan-100 text-cyan-600'
                      : isDark
                        ? 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
