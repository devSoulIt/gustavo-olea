'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CompetitionCard from './CompetitionCard';

const Competitions = () => {
  const competitions = [
    {
      date: 'Julio 2024',
      event: 'Campeonato Mundial de París',
      location: 'París, Francia',
      result: '1:45.23',
      position: '7° lugar',
      finaRanking: '#7 Mundial',
      record: 'Récord Sudamericano',
      link: 'https://www.worldaquatics.com'
    },
    {
      date: 'Abril 2024',
      event: 'Copa América de Natación',
      location: 'São Paulo, Brasil',
      result: '1:46.15',
      position: '2° lugar',
      finaRanking: '#12 Mundial',
      record: 'Récord Nacional',
      link: 'https://www.worldaquatics.com'
    },
    {
      date: 'Febrero 2024',
      event: 'Campeonato Sudamericano',
      location: 'Buenos Aires, Argentina',
      result: '1:47.03',
      position: '1° lugar',
      finaRanking: '#15 Mundial',
      record: 'Récord del Torneo',
      link: 'https://www.consanat.org'
    },
    {
      date: 'Diciembre 2023',
      event: 'Mundial de Piscina Corta',
      location: 'Melbourne, Australia',
      result: '1:46.78',
      position: '8° lugar',
      finaRanking: '#8 Mundial',
      link: 'https://www.worldaquatics.com'
    },
    {
      date: 'Septiembre 2023',
      event: 'Juegos Panamericanos',
      location: 'Santiago, Chile',
      result: '1:45.89',
      position: '2° lugar',
      finaRanking: '#9 Mundial',
      record: 'Récord de Juegos',
      link: 'https://www.santiago2023.org'
    },
    {
      date: 'Julio 2023',
      event: 'Mundial de Budapest',
      location: 'Budapest, Hungría',
      result: '1:46.45',
      position: '7° lugar',
      finaRanking: '#7 Mundial',
      record: 'Récord Nacional',
      link: 'https://www.worldaquatics.com'
    }
  ];

  return (
    <section id="competencias" className="py-20 bg-[var(--brand-neutral)]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)] mb-4">
            Competencias Destacadas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resultados y logros en las competencias más importantes a nivel internacional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <CompetitionCard
              key={`${competition.event}-${competition.date}`}
              {...competition}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-[var(--brand-primary)] mb-4">
              Competencia NOA
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--brand-accent)] mb-2">2°</div>
                <div className="text-gray-600">Ranking</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Competitions;