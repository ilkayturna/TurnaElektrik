import React from 'react';
import { Users, Calendar, ThumbsUp, MapPin } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { icon: <Calendar className="w-8 h-8" />, value: "10+", label: "Yıllık Deneyim" },
    { icon: <Users className="w-8 h-8" />, value: "2000+", label: "Mutlu Müşteri" },
    { icon: <ThumbsUp className="w-8 h-8" />, value: "5.0", label: "Google Puanı" },
    { icon: <MapPin className="w-8 h-8" />, value: "İstanbul", label: "Tüm İlçeler" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-100 text-brand-dark text-sm font-bold px-4 py-1 rounded-full mb-4">HAKKIMIZDA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Neden Turna Elektrik?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            İstanbul genelinde 10 yılı aşkın süredir güvenilir elektrik hizmeti sunuyoruz. 
            Müşteri memnuniyeti bizim için her şeyden önce gelir.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-brand-yellow hover:to-yellow-300 transition-all duration-300 group">
              <div className="text-brand-dark mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand-dark mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center gap-2">
            ✓ Garantili İşçilik
          </span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2">
            ✓ Şeffaf Fiyatlandırma
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full flex items-center gap-2">
            ✓ Aynı Gün Servis
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full flex items-center gap-2">
            ✓ Temiz ve Özenli Çalışma
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
