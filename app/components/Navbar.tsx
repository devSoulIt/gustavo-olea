'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Historia', href: '#historia' },
    { name: 'Competencias', href: '#competencias' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Patrocinio', href: '#patrocinio' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className={`${isScrolled && "md:w-36 md:h-36"} relative w-16 h-16 md:w-32 md:h-32 flex-shrink-0`}>
                <img
                  src={isScrolled ? "/images/Logo Gustavo2.png" : "/images/Logo Gustavo.png"}
                  alt="Logo Gustavo Olea"
                  className={`${isScrolled && "-top-2 -left-2"} absolute inset-0 w-full h-full object-contain`}
                />
              </div>
              <span className={`text-lg md:text-xl font-bold ${isScrolled ? 'text-[var(--brand-primary)]' : 'text-white'}`}>
                Gustavo Olea
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors hover:text-[var(--brand-accent)] ${isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  aria-label={`Ir a sección ${link.name}`}
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#patrocinio')}
                className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white border-none"
              >
                Patrocíname
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú móvil"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-[var(--brand-primary)]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-[var(--brand-primary)]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-medium text-[var(--brand-primary)] hover:text-[var(--brand-accent)] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={`Ir a sección ${link.name}`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button
                  onClick={() => scrollToSection('#patrocinio')}
                  className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white border-none text-xl px-8 py-4"
                >
                  Patrocíname
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;