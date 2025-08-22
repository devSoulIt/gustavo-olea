'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CompetitionCard from './CompetitionCard';

const Competitions = () => {
  const competitions = [
    {
      date: 'Agosto 2022',
      event: 'Clasificatoria juevos evita',
      location: 'Argentina',
      result: '-',
      position: '-',
      finaRanking: '-',
      record: '-',
      link: '#'
    },
    {
      date: 'Febrero 2023',
      event: 'Dique los sauces',
      location: 'Rioja, Argentina',
      result: '-',
      position: '1° lugar',
      finaRanking: '1km',
      record: '-',
      link: '#'
    },
    {
      date: 'Marzo 2025',
      event: 'Final noa - Dique campo alegre',
      location: 'Salta, Argentina',
      result: '-',
      position: 'Top 2',
      finaRanking: '-',
      record: '-',
      link: '#'
    },
    {
      date: 'Marzo 2025',
      event: 'Embalse - Calamuchita',
      location: 'Cordoba, Argentina',
      result: '-',
      position: 'Top 5',
      finaRanking: '-',
      link: '#'
    },
    {
      date: 'Dicimebre 2024',
      event: 'Pileta lewis tennis',
      location: 'Santiago del estero, Argentina',
      result: '-',
      position: '1° lugar',
      finaRanking: '-',
      record: '-',
      link: '#'
    },
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