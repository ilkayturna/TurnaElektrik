import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-lg">TURNA Elektrik</h2>
          <p className="text-sm mt-1">İstanbul'un güvenilir çözüm ortağı.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-brand-yellow transition-colors">Ana Sayfa</a>
          <a href="#services" className="hover:text-brand-yellow transition-colors">Hizmetler</a>
          <a href="#contact" className="hover:text-brand-yellow transition-colors">İletişim</a>
        </div>
        <div className="text-xs">
          &copy; {new Date().getFullYear()} Turna Elektrik. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;