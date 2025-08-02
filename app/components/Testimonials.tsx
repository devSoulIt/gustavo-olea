'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  content: string;
  initials: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Méndez',
      role: 'Entrenador Principal',
      organization: 'Selección Argentina de Natación',
      content: 'Alex es uno de los nadadores más dedicados y talentosos que he entrenado en mis 20 años de carrera. Su disciplina y determinación son ejemplares, y estoy convencido de que puede lograr grandes cosas en Dubái 2025.',
      initials: 'CM'
    },
    {
      id: 2,
      name: 'Marina Rodríguez',
      role: 'Directora de Marketing',
      organization: 'SportTech Argentina',
      content: 'Patrocinar a Alex ha sido una de nuestras mejores decisiones. Su profesionalismo y el alcance que nos ha dado a nivel internacional superó todas nuestras expectativas. Es un verdadero embajador de marca.',
      initials: 'MR'
    },
    {
      id: 3,
      name: 'Javier Ortega',
      role: 'Periodista Deportivo',
      organization: 'ESPN Latinoamérica',
      content: 'He cubierto la carrera de Alex durante los últimos tres años y puedo afirmar que es uno de los atletas más prometedores de Sudamérica. Su evolución ha sido constante y su potencial es innegable.',
      initials: 'JO'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)] mb-4">
            Lo que Dicen de Mí
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonios de quienes han trabajado conmigo y conocen mi dedicación
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Display */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-[var(--brand-neutral)] border-none shadow-xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="text-center">
                        <Quote className="w-12 h-12 text-[var(--brand-accent)] mx-auto mb-6" />
                        
                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                          "{testimonials[currentIndex].content}"
                        </blockquote>

                        <div className="flex items-center justify-center space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarFallback className="bg-[var(--brand-primary)] text-white text-lg font-bold">
                              {testimonials[currentIndex].initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-left">
                            <div className="font-bold text-[var(--brand-primary)] text-lg">
                              {testimonials[currentIndex].name}
                            </div>
                            <div className="text-gray-600">
                              {testimonials[currentIndex].role}
                            </div>
                            <div className="text-[var(--brand-accent)] font-medium">
                              {testimonials[currentIndex].organization}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <Button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-[var(--brand-primary)] shadow-lg border-none rounded-full w-12 h-12 p-0"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-[var(--brand-primary)] shadow-lg border-none rounded-full w-12 h-12 p-0"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[var(--brand-accent)] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {isAutoPlaying ? 'Pausar' : 'Reproducir'} rotación automática
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 bg-[var(--brand-primary)] text-white rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Respaldo Profesional
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[var(--brand-accent)] mb-2">8</div>
              <div className="text-lg">Años de co nadador</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;