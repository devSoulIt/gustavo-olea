'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Target, Star, Award } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData: TimelineItem[] = [
    {
      year: '2018',
      title: 'Debut Internacional',
      description: 'Primera participación en campeonatos sudamericanos juveniles',
      icon: <Star className="w-6 h-6" />
    },
    {
      year: '2020',
      title: 'Récord Nacional',
      description: 'Establecimiento del récord argentino en 200m estilo libre',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      year: '2022',
      title: 'Juegos Panamericanos',
      description: 'Medalla de plata en competencia continental',
      icon: <Medal className="w-6 h-6" />
    },
    {
      year: '2023',
      title: 'Mundial de Budapest',
      description: 'Clasificación a finales y séptimo lugar mundial',
      icon: <Award className="w-6 h-6" />
    },
    {
      year: '2025',
      title: 'Meta: Copa del Mundo',
      description: 'Objetivo de medalla en Dubái 2025',
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <section id="historia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)] mb-4">
            Mi Trayectoria
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un recorrido de dedicación y logros hacia la excelencia deportiva
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-center relative">
              {/* Timeline Line */}
              <div className="absolute top-[30px] left-0 right-0 h-1 bg-[var(--brand-neutral)] transform -translate-y-1/2 z-0"></div>
              <motion.div
                className="absolute top-[30px] left-0 h-1 bg-[var(--brand-primary)] transform -translate-y-1/2 z-10"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              ></motion.div>

              {/* Timeline Items */}
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative z-20 flex flex-col items-center max-w-xs" 
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    index === timelineData.length - 1 
                      ? 'bg-[var(--brand-accent)] text-white' 
                      : 'bg-[var(--brand-primary)] text-white'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[var(--brand-primary)] mb-2">
                      {item.year}
                    </h3>
                    <h4 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-[var(--brand-neutral)]"></div>
              <motion.div
                className="absolute left-8 top-0 w-1 bg-[var(--brand-primary)]"
                initial={{ height: 0 }}
                animate={isInView ? { height: '100%' } : { height: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              ></motion.div>

              {/* Timeline Items */}
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="relative flex items-center mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 relative z-10 ${
                    index === timelineData.length - 1 
                      ? 'bg-[var(--brand-accent)] text-white' 
                      : 'bg-[var(--brand-primary)] text-white'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[var(--brand-primary)] mb-1">
                      {item.year}
                    </h3>
                    <h4 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;