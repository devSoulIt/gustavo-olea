'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageCircle, Eye, Users, TrendingUp, Calendar, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

const Sponsorship = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast("¡Mensaje enviado con éxito! Te contactaré pronto.");
      setFormData({ name: '', company: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const roiBenefits = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visibilidad en Competencias',
      description: 'Logo en traje de baño durante todas las competencias internacionales',
      value: '50+ eventos anuales'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Alcance en Redes Sociales',
      description: 'Exposición en Instagram, TikTok y YouTube',
      value: '15K seguidores activos'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Cobertura Mediática',
      description: 'Apariciones en medios deportivos nacionales e internacionales',
      value: '20+ menciones mensuales'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Eventos Corporativos',
      description: 'Participación en eventos de la empresa como embajador',
      value: '4 eventos anuales'
    }
  ];

  const sponsorshipTiers = [
    {
      name: 'Patrocinador Principal',
      amount: '$15,000',
      benefits: [
        'Logo prominente en traje de competencia',
        'Mención en todas las entrevistas',
        'Contenido exclusivo para redes sociales',
        '6 eventos corporativos anuales',
        'Merchandising personalizado'
      ],
      color: 'bg-[var(--brand-accent)]'
    },
    {
      name: 'Patrocinador Oficial',
      amount: '$8,000',
      benefits: [
        'Logo en traje de entrenamiento',
        'Posts mensuales en redes sociales',
        '3 eventos corporativos anuales',
        'Merchandising estándar'
      ],
      color: 'bg-[var(--brand-primary)]'
    },
    {
      name: 'Colaborador',
      amount: '$3,000',
      benefits: [
        'Mención en biografías de redes',
        'Post trimestral de agradecimiento',
        '1 evento corporativo anual'
      ],
      color: 'bg-gray-600'
    }
  ];

  return (
    <section id="patrocinio" className="py-20 bg-[var(--brand-neutral)]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)] mb-4">
            Oportunidades de Patrocinio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Únete a mi camino hacia Dubái 2025 y potencia tu marca a nivel internacional
          </p>
        </motion.div>

        {/* ROI Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-[var(--brand-primary)] mb-8">
            Retorno de Inversión para tu Marca
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-[var(--brand-accent)] mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                    <Badge className="bg-[var(--brand-primary)] text-white">
                      {benefit.value}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship Tiers */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-[var(--brand-primary)] mb-8">
            Niveles de Patrocinio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === 0 ? 'md:scale-105' : ''}
              >
                <Card className={`h-full ${index === 0 ? 'ring-2 ring-[var(--brand-accent)]' : ''}`}>
                  <CardHeader className={`text-white text-center ${tier.color} rounded-t-lg`}>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <div className="text-3xl font-bold">{tier.amount}</div>
                    {index === 0 && (
                      <Badge className="bg-white text-[var(--brand-accent)] w-fit mx-auto">
                        <Star className="w-3 h-3 mr-1" />
                        Recomendado
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[var(--brand-primary)]">
                  Conversemos sobre tu Patrocinio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[var(--brand-primary)]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-[var(--brand-primary)]"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[var(--brand-primary)]"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="border-gray-300 focus:border-[var(--brand-primary)] resize-none"
                      placeholder="Cuéntanos sobre tu interés en patrocinar mi carrera..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white border-none"
                    size="lg"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[var(--brand-primary)]">
                  Contacto Directo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/90 text-white border-none justify-start"
                  size="lg"
                  onClick={() => window.open('https://calendly.com/alex-martinez-swimmer', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Programar Videollamada
                </Button>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white border-none justify-start"
                  size="lg"
                  onClick={() => window.open('https://wa.me/5491123456789?text=Hola%20Alex,%20estoy%20interesado%20en%20patrocinar%20tu%20carrera', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp Business
                </Button>
                <Button
                  variant="outline"
                  className="w-full text-[var(--brand-primary)] border-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white justify-start"
                  size="lg"
                  onClick={() => window.open('tel:+5491123456789')}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +54 9 11 2345-6789
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[var(--brand-primary)] text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">
                  ¿Por qué patrocinarme?
                </h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Atleta de élite con resultados probados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Exposición internacional garantizada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Valores deportivos alineados con tu marca</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[var(--brand-accent)] rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">ROI medible y reportes regulares</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;