import React from 'react';
import { Zap, PenTool, Tv, Plug, Home, Shield, Cable, Lightbulb, Wrench } from 'lucide-react';

const Features: React.FC = () => {
  const electricalServices = [
    { title: "Elektrik Arıza", icon: <Zap className="w-8 h-8 text-brand-yellow" />, desc: "Ev ve iş yeri elektrik tesisatı onarımı, sigorta değişimi ve arıza tespiti." },
    { title: "Avize & Aydınlatma", icon: <Lightbulb className="w-8 h-8 text-brand-yellow" />, desc: "Avize montajı, LED aydınlatma, spot lamba ve korniş ışık kurulumu." },
    { title: "Priz & Anahtar", icon: <Plug className="w-8 h-8 text-brand-yellow" />, desc: "Priz, anahtar montajı ve değişimi. Topraklı priz kurulumu." },
    { title: "Uydu & Görüntü", icon: <Tv className="w-8 h-8 text-brand-yellow" />, desc: "Uydu sistemleri kurulumu, çanak anten ayarı ve merkezi sistem çözümleri." },
    { title: "Kablo Çekimi", icon: <Cable className="w-8 h-8 text-brand-yellow" />, desc: "Yeni bina kablo tesisatı, ek kablo çekimi ve kanal döşeme." },
    { title: "Topraklama Testi", icon: <Shield className="w-8 h-8 text-brand-yellow" />, desc: "Topraklama ölçümü, kaçak akım tespiti ve güvenlik kontrolü." },
    { title: "Akıllı Ev Sistemleri", icon: <Home className="w-8 h-8 text-brand-yellow" />, desc: "Akıllı priz, aydınlatma otomasyonu ve uzaktan kontrol sistemleri." },
    { title: "Genel Bakım", icon: <Wrench className="w-8 h-8 text-brand-yellow" />, desc: "Periyodik elektrik kontrolü, sigorta kutusu bakımı ve önleyici servis." },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Electrical Section */}
        <div id="services">
          <div className="text-center mb-12">
            <span className="inline-block bg-brand-yellow text-brand-dark text-sm font-bold px-4 py-1 rounded-full mb-4">HİZMETLERİMİZ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Profesyonel Elektrik Çözümleri</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Eviniz ve iş yeriniz için güvenilir, garantili ve uygun fiyatlı elektrik hizmetleri sunuyoruz.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {electricalServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-brand-yellow hover:-translate-y-1 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Resmi Fiyat Listesi Banner */}
          <div className="mt-12 bg-gradient-to-r from-brand-dark to-gray-800 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">📜 Resmi Fiyat Tarifesi</h3>
            <p className="text-gray-300 mb-4">
              Fiyatlarımız <span className="text-brand-yellow font-semibold">İstanbul Elektrik Teknisyenleri Esnaf ve Sanatkarlar Odası</span>'nın resmi tarifesine göre belirlenmektedir.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
              <span className="bg-white/10 px-3 py-1 rounded-full">Arıza Tespit: 737 TL'den başlayan</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Keşif Ücreti: 3.125 TL'den başlayan</span>
              <span className="bg-white/10 px-3 py-1 rounded-full">Topraklama Ölçüm: 7.340 TL</span>
            </div>
            <a 
              href="tel:05337766843" 
              className="inline-block bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors"
            >
              Fiyat Bilgisi İçin Arayın
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;