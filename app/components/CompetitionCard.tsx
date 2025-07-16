'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface CompetitionCardProps {
  date: string;
  event: string;
  location: string;
  result: string;
  position: string;
  finaRanking?: string;
  record?: string;
  link?: string;
  index: number;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  date,
  event,
  location,
  result,
  position,
  finaRanking,
  record,
  link,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 hover:border-[var(--brand-accent)]/30">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2 text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{date}</span>
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-accent)] hover:text-[var(--brand-accent)]/80 transition-colors"
                aria-label={`Enlace oficial del evento ${event}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <h3 className="text-xl font-bold text-[var(--brand-primary)] mb-2">
            {event}
          </h3>

          <div className="flex items-center space-x-2 text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Tiempo:</span>
              <span className="text-lg font-bold text-[var(--brand-primary)]">{result}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">Posición:</span>
              <Badge 
                variant={position.includes('1°') ? 'default' : 'secondary'}
                className={position.includes('1°') ? 'bg-[var(--brand-accent)] text-white' : ''}
              >
                <Trophy className="w-3 h-3 mr-1" />
                {position}
              </Badge>
            </div>

            {/* Hover Details */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-3 border-t border-gray-200 space-y-2">
                {finaRanking && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Ranking FINA:</span>
                    <span className="text-sm font-semibold">{finaRanking}</span>
                  </div>
                )}
                {record && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Récord:</span>
                    <Badge variant="outline" className="text-[var(--brand-accent)] border-[var(--brand-accent)]">
                      {record}
                    </Badge>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CompetitionCard;