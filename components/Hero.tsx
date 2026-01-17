import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-brand-dark text-white py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800 opacity-20 transform skew-x-12 translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-green-500 text-xs font-bold px-2 py-1 rounded text-white">Google 5.0 ⭐⭐⭐⭐⭐</span>
            <span className="text-gray-300 text-sm">Bağcılar'ın En Güveniliri</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Profesyonel Elektrik <br />
            <span className="text-brand-yellow">Arıza & Bakım Servisi</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Evinizin ve iş yerinizin tüm elektrik arızaları, montaj ve bakım işlemleri için yanınızdayız. Güvenilir, hızlı ve garantili hizmet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="bg-brand-yellow text-brand-dark font-bold py-4 px-8 rounded-lg text-center hover:bg-yellow-400 transition-transform transform hover:-translate-y-1 shadow-lg"
            >
              Hemen Ara: {CONTACT_INFO.phone}
            </a>
            <a 
              href="#services"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-center hover:bg-white hover:text-brand-dark transition-all"
            >
              Hizmetlerimiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;