'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/hero.webp"
          alt="Nadador profesional bajo el agua"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Rumbo a la gran final
          <br />
          <span className="text-[var(--brand-accent)]"> mundial oceanman 2025</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nadador argentino de alto rendimiento, un apasionado del deporte y de la natación competitiva
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={() => scrollToSection('#patrocinio')}
            className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white border-none text-lg px-8 py-4 h-auto"
            size="lg"
          >
            Conviértete en Patrocinador
          </Button>
          <Button
            onClick={() => scrollToSection('#historia')}
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-[var(--brand-primary)] text-lg px-8 py-4 h-auto"
            size="lg"
          >
            Conoce mi Historia
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;