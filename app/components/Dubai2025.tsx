'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, DollarSign, Users, Award, Plane } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Dubai2025 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-1').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fundingNeeds = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Viajes y Estadía',
      amount: '$8,000',
      description: 'Vuelos, alojamiento y alimentación en Dubái'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Equipo Técnico',
      amount: '$5,000',
      description: 'Entrenador, fisioterapeuta y analista deportivo'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Equipamiento',
      amount: '$3,000',
      description: 'Trajes de competencia, gafas y equipos especializados'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Preparación',
      amount: '$4,000',
      description: 'Entrenamientos en altura y campamentos de preparación'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--brand-primary)] to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgOC04LTgtOCIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Próxima Meta: <span className="text-[var(--brand-accent)]">Dubái 2025</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Copa del Mundo de Natación - La competencia más importante de mi carrera
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content and Countdown */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Mi Objetivo</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Clasificar entre el top 10 de la final mundial 2025 en dubai, representando a argentina en una competencia de alto prestigio y nivel internacional
                </p>
                <div className="flex items-center gap-4 text-[var(--brand-accent)]">
                  <Target className="w-6 h-6" />
                  <span className="text-lg font-semibold">Meta: Top 10 Mundial</span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold text-center mb-6">
                  Tiempo restante para Dubái 2025
                </h4>
                <div className="grid grid-cols-4 gap-4 text-center">
                  {[
                    { label: 'Días', value: timeLeft.days },
                    { label: 'Horas', value: timeLeft.hours },
                    { label: 'Minutos', value: timeLeft.minutes },
                    { label: 'Segundos', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="bg-white/20 rounded-lg p-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-[var(--brand-accent)]">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm opacity-80">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Funding Needs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Necesidades de Financiación
              </h3>
              
              <div className="space-y-4 mb-8">
                {fundingNeeds.map((need, index) => (
                  <motion.div
                    key={need.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/20 border-white/30 text-white">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-[var(--brand-accent)]">
                              {need.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold">{need.title}</h4>
                              <p className="text-sm opacity-80">{need.description}</p>
                            </div>
                          </div>
                          <div className="text-xl font-bold text-[var(--brand-accent)]">
                            {need.amount}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="text-center border-t border-white/30 pt-6">
                <div className="text-3xl font-bold text-[var(--brand-accent)] mb-2">
                  $20,000 USD
                </div>
                <div className="text-lg mb-6">Inversión total necesaria</div>
                <Button
                  onClick={() => scrollToSection('#patrocinio')}
                  className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white border-none text-lg px-8 py-3"
                  size="lg"
                >
                  Apoya mi sueño
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dubai2025;