import React from 'react';
import { Phone, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const EmergencyBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-brand-dark to-gray-800 text-white py-3 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDBMNDAgNDBIMHoiLz48cGF0aCBkPSJNMjAgMTBsNSAxMGgtMTBsMTAtMTB6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-brand-yellow" />
            <span className="font-bold text-lg">PROFESYONEL ELEKTRİK HİZMETİ</span>
            <span className="text-brand-yellow text-sm">| Tüm İstanbul</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/30"></div>
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold px-4 py-1.5 rounded-full hover:bg-yellow-400 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Randevu: {CONTACT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
