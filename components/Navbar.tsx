import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-brand-yellow p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-wide">TURNA</h1>
              <span className="text-xs text-brand-yellow uppercase tracking-wider block -mt-1">Elektrik & Elektronik</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-brand-yellow transition-colors">Ana Sayfa</a>
            <a href="#services" className="hover:text-brand-yellow transition-colors">Hizmetler</a>
            <a href="#contact" className="hover:text-brand-yellow transition-colors">İletişim</a>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
              className="bg-brand-yellow text-brand-dark px-4 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-yellow-400 transition-colors"
            >
              <Phone size={18} />
              <span>Hemen Ara</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-700">Ana Sayfa</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-700">Elektrik Hizmetleri</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-700">İletişim</a>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
              className="mt-4 block w-full text-center bg-brand-yellow text-brand-dark px-4 py-3 rounded font-bold"
            >
              Hemen Ara: {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;