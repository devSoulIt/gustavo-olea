'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  year: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('Todas');

  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1573289662276-1b5ad58db4b9?ixlib=rb-4.0.3&w=800&q=80',
      alt: 'Entrenamiento en piscina olímpica',
      category: 'Entrenamiento',
      year: '2024'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=800&q=80',
      alt: 'Competencia internacional',
      category: 'Competencia',
      year: '2024'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=800&q=80',
      alt: 'Ceremonia de premiación',
      category: 'Premiación',
      year: '2023'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&w=800&q=80',
      alt: 'Sesión de entrenamiento técnico',
      category: 'Entrenamiento',
      year: '2024'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1520637836862-4d197d17c0a9?ixlib=rb-4.0.3&w=800&q=80',
      alt: 'Mundial de Budapest 2023',
      category: 'Competencia',
      year: '2023'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=800&q=80',
      alt: 'Entrenamiento de resistencia',
      category: 'Entrenamiento',
      year: '2024'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1586040280348-b464fe659b42?ixlib=rb-4.0.3&w=800&q=80',
      alt: 'Juegos Panamericanos Santiago',
      category: 'Competencia',
      year: '2023'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&w=800&q=80',
      alt: 'Medalla de plata continental',
      category: 'Premiación',
      year: '2023'
    }
  ];

  const categories = ['Todas', 'Competencia', 'Entrenamiento', 'Premiación'];
  const years = ['Todas', '2024', '2023'];

  const filteredImages = images.filter(image => {
    if (filter === 'Todas') return true;
    return image.category === filter;
  });

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)] mb-4">
            Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Momentos destacados de mi carrera deportiva y entrenamientos
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'default' : 'outline'}
              className={filter === category 
                ? 'bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary)]/90' 
                : 'text-[var(--brand-primary)] border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white'
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="break-inside-avoid cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge className="bg-[var(--brand-accent)] text-white mb-2">
                      {image.category}
                    </Badge>
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ImageWithFallback
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Navigation */}
                <Button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none"
                  size="icon"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none"
                  size="icon"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
                
                {/* Close Button */}
                <Button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-none"
                  size="icon"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white rounded-b-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-[var(--brand-accent)] text-white">
                      {selectedImage.category}
                    </Badge>
                    <Badge variant="outline" className="text-white border-white">
                      {selectedImage.year}
                    </Badge>
                  </div>
                  <p className="text-lg font-medium">{selectedImage.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;