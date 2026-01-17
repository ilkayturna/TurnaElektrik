import React from 'react';
import { Zap, PenTool, Tv } from 'lucide-react';

const Features: React.FC = () => {
  const electricalServices = [
    { title: "Elektrik Arıza", icon: <Zap className="w-8 h-8 text-brand-yellow" />, desc: "Ev ve iş yeri elektrik tesisatı onarımı, sigorta değişimi ve arıza tespiti." },
    { title: "Montaj & Kurulum", icon: <PenTool className="w-8 h-8 text-brand-yellow" />, desc: "Avize, priz, anahtar, led aydınlatma ve korniş montaj işlemleri." },
    { title: "Uydu & Görüntü", icon: <Tv className="w-8 h-8 text-brand-yellow" />, desc: "Uydu sistemleri kurulumu, çanak anten ayarı ve merkezi sistem çözümleri." },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Electrical Section */}
        <div id="services">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Hizmetlerimiz</h2>
            <p className="mt-4 text-gray-600">Eviniz ve iş yeriniz için profesyonel çözümler.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {electricalServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-brand-yellow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;