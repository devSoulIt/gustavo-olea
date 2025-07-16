'use client';

import React from 'react';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Competitions from './components/Competitions';
import Gallery from './components/Gallery';
import Dubai2025 from './components/Dubai2025';
import Sponsorship from './components/Sponsorship';
import Testimonials from './components/Testimonials';
import MediaKit from './components/MediaKit';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Athlete",
            "name": "Gustavo Olea",
            "sport": "Swimming",
            "nationality": "Argentina",
            "description": "Nadador profesional argentino especializado en 200m estilo libre, buscando patrocinadores para competir en la Copa del Mundo de Natación Dubái 2025",
            "url": "https://alexmartinez.com",
            "sameAs": [
              "https://instagram.com/alexmartinezswim",
              "https://twitter.com/alexmartinezswim",
              "https://linkedin.com/in/alexmartinezswim"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Nadador Profesional"
            },
            "award": [
              "Medalla de Plata - Juegos Panamericanos 2023",
              "7° lugar - Mundial de Budapest 2023",
              "Récord Nacional Argentino - 200m Estilo Libre"
            ]
          })
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Timeline />
        <Competitions />
        <Gallery />
        <Dubai2025 />
        <Sponsorship />
        <Testimonials />
        <MediaKit />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={3000}
      />
    </div>
  );
}