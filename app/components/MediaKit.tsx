'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image, Palette, Video, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

const MediaKit = () => {
  const handleDownload = (fileName: string) => {
    // Simulate download - in a real app, this would trigger an actual download
    toast(`Descargando ${fileName}...`);
  };

  const mediaItems = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Dossier Completo',
      description: 'Información detallada sobre mi carrera, logros y oportunidades de patrocinio',
      fileType: 'PDF',
      fileSize: '2.5 MB',
      fileName: 'gustavo-olea-dossier-2025.pdf',
      featured: true
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Fotos Alta Resolución',
      description: 'Galería completa de fotos profesionales para uso comercial',
      fileType: 'ZIP',
      fileSize: '45 MB',
      fileName: 'gustavo-olea-photos-hr.zip',
      featured: false
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Logos y Branding',
      description: 'Logotipos vectoriales y elementos de marca en diferentes formatos',
      fileType: 'ZIP',
      fileSize: '8 MB',
      fileName: 'gustavo-olea-logos.zip',
      featured: false
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Videos Promocionales',
      description: 'Material audiovisual para campañas y presentaciones',
      fileType: 'ZIP',
      fileSize: '120 MB',
      fileName: 'gustavo-olea-videos.zip',
      featured: false
    }
  ];

  const quickFacts = [
    { label: 'Edad', value: '17 años' },
    { label: 'Especialidad', value: '2,5km - 6km' },
    { label: 'Ranking NOA', value: '2°' },
    { label: 'Nacionalidad', value: 'Argentina' },
    { label: 'Residencia', value: 'Tucumán' }
  ];

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
            Kit de Medios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recursos profesionales para medios de comunicación y patrocinadores
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Download Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.featured ? 'ring-2 ring-[var(--brand-accent)]' : ''
                    }`}>
                    <CardHeader className="text-center">
                      {item.featured && (
                        <Badge className="bg-[var(--brand-accent)] text-white w-fit mx-auto mb-2">
                          <Star className="w-3 h-3 mr-1" />
                          Destacado
                        </Badge>
                      )}
                      <div className="text-[var(--brand-primary)] mb-4 flex justify-center">
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl text-[var(--brand-primary)]">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mb-6">
                        <span className="bg-gray-100 px-2 py-1 rounded">{item.fileType}</span>
                        <span>{item.fileSize}</span>
                      </div>
                      <Button
                        onClick={() => handleDownload(item.fileName)}
                        className={`w-full ${item.featured
                          ? 'bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white border-none'
                          : 'bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white border-none'
                          }`}
                        disabled
                      >
                        <Download className="w-4 h-4 mr-2" />
                        No disponible
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--brand-neutral)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[var(--brand-primary)] mb-4">
                    Términos de Uso
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Todas las imágenes son para uso editorial y comercial autorizado</li>
                    <li>• Se requiere atribución: "Cortesía de Gustavo Olea - Nadador Profesional"</li>
                    <li>• Prohibida la modificación sin autorización previa</li>
                    <li>• Para uso comercial extendido, contactar directamente</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Quick Facts Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[var(--brand-primary)]">
                  Datos Clave
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quickFacts.map((fact, index) => (
                    <div key={fact.label} className="flex justify-between items-center">
                      <span className="text-gray-600">{fact.label}:</span>
                      <span className="font-semibold text-[var(--brand-primary)]">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[var(--brand-primary)] text-white">
              <CardHeader>
                <CardTitle className="text-xl">
                  Contacto de Prensa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Email:</span><br />
                    gustavoolea23@gmail.com
                  </div>
                  <div>
                    <span className="font-semibold">Teléfono:</span><br />
                    +54 9 3863 562958
                  </div>
                  {/* <div>
                    <span className="font-semibold">Manager:</span><br />
                    Carlos Méndez
                  </div> */}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-[var(--brand-primary)]">
                  Próximas Competencias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="border-l-4 border-[var(--brand-accent)] pl-3">
                    <div className="font-semibold">Final mundial oceanman 2025 - Dubái</div>
                    <div className="text-gray-600">1 - 7 diciembre</div>
                  </div>
                  <div className="border-l-4 border-[var(--brand-primary)] pl-3">
                    <div className="font-semibold">Circuito NOA</div>
                    <div className="text-gray-600">2025 - 2026</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;