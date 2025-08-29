'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://instagram.com/alexmartinezswim',
      color: 'hover:text-pink-500'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/alexmartinezswim',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/alexmartinezswim',
      color: 'hover:text-blue-600'
    }
  ];

  const quickLinks = [
    { name: 'Historia', href: '#historia' },
    { name: 'Competencias', href: '#competencias' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Patrocinio', href: '#patrocinio' },
  ];

  const legalLinks = [
    { name: 'Aviso Legal', href: '#' },
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Uso', href: '#' },
  ];

  return (
    <footer id="contacto" className="bg-[var(--brand-primary)] text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/images/Logo Gustavo.png"
                  alt="Logo Gustavo Olea"
                  className="w-28 h-28 object-contain"
                />
                <h3 className="text-2xl font-bold">Gustavo Olea</h3>
              </div>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                Nadador argentino de alto rendimiento con la meta de representar al país
                en la Copa del Mundo de Natación Dubái 2025. Buscando patrocinadores
                que compartan la pasión por la excelencia deportiva.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[var(--brand-accent)]" />
                  <a href="mailto:gustavoolea23@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    gustavoolea23@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[var(--brand-accent)]" />
                  <a href="tel:+5491123456789" className="text-gray-300 hover:text-white transition-colors">
                    +54 9 3863 562958
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[var(--brand-accent)]" />
                  <span className="text-gray-300">Tucumán, Argentina</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Navegación</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-[var(--brand-accent)] transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">¿Listo para patrocinarme?</h4>
              <p className="text-gray-300 mb-6">
                Únete a mi camino hacia Dubái 2025 y forma parte de la historia del deporte argentino.
              </p>
              <Button
                onClick={() => scrollToSection('#patrocinio')}
                className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white border-none w-full mb-4"
              >
                Conviértete en Patrocinador
              </Button>

              {/* Social Links */}
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-300 ${social.color} transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20`}
                    aria-label={`Visitar ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="border-t border-white/20 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Mantente al tanto de mi progreso</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Recibe actualizaciones sobre mis entrenamientos, competencias y el camino hacia Dubái 2025
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--brand-accent)]"
              />
              <Button className="bg-[var(--brand-accent)] hover:bg-[var(--brand-accent)]/90 text-white border-none px-8">
                Suscribirse
              </Button>
            </div> */}
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} Gustavo Olea. Todos los derechos reservados.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center mt-4 pt-4 border-t border-white/10">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              Hecho con <Heart className="w-4 h-4 mx-1 text-[var(--brand-accent)]" />
              para alcanzar los sueños olímpicos
            </p>

            <div className='flex justify-center items-center gap-2'>
              <p>Desarrollado por</p>
              <a href="https://www.devsoulit.com/" target='_blank' className='text-[var(--brand-accent)]'>DevSoul</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;