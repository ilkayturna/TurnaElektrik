import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Ahmet Y.", comment: "Evimdeki sigorta sürekli atıyordu, Turna Elektrik hızlıca gelip sorunu kökten çözdü. Çok teşekkürler.", stars: 5 },
    { name: "Selin K.", comment: "Evdeki elektrik arızası için aradık, çok hızlı geldiler ve sorunu hemen çözdüler. Güler yüzlü ve temiz işçilik.", stars: 5 },
    { name: "Mehmet T.", comment: "Bağcılar'da bulabileceğiniz en iyi usta. Yeni taşındığım evimin tüm avize ve priz montajlarını titizlikle yaptılar.", stars: 5 },
  ];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Müşteri Yorumları</h2>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex text-brand-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
            </div>
            <span className="text-xl font-semibold">5.0 / 5.0</span>
          </div>
          <p className="text-gray-400 mt-2">Google İşletme Profilimizde %100 Müşteri Memnuniyeti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="flex text-brand-yellow mb-4">
                {[...Array(review.stars)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-gray-300 italic mb-4">"{review.comment}"</p>
              <div className="font-bold text-white">- {review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;