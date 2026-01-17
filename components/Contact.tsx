import React from 'react';
import { Phone, MapPin, Instagram, Clock } from 'lucide-react';
import { CONTACT_INFO, BUSINESS_HOURS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">İletişime Geçin</h2>
            <p className="text-gray-600 mb-8">
              Elektrik arızaları, montaj işlemleri veya ürün bilgisi almak için bizi arayabilir veya mağazamızı ziyaret edebilirsiniz.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Phone className="text-brand-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Telefon</h3>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-lg text-blue-600 hover:underline block">
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-sm text-gray-500">7/24 Acil Durum İçin Arayabilirsiniz</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <MapPin className="text-brand-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Adres</h3>
                  <p className="text-gray-600">
                    {CONTACT_INFO.address}
                  </p>
                  <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline mt-1 block">
                    Google Haritalarda Yol Tarifi Al
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Clock className="text-brand-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Çalışma Saatleri</h3>
                  <p className="text-gray-600">
                    Açılış: {BUSINESS_HOURS.split('-')[0]}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Instagram className="text-brand-dark" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Sosyal Medya</h3>
                  <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    {CONTACT_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
             {/* Static Map Image Placeholder or Embed */}
             <iframe 
               title="Turna Elektrik Lokasyon"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9786488764834!2d28.8475!3d41.0315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa4e8e8e8e8e8%3A0x123456789abcdef!2sBa%C4%9Fc%C4%B1lar%2C%20Istanbul!5e0!3m2!1str!2str!4v1625000000000!5m2!1str!2str" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy"
               className="absolute inset-0 w-full h-full"
             ></iframe>
             <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow text-xs text-gray-500">
               *Temsili harita konumu
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;