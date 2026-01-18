import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Ahmet Y.", location: "Kadıköy", comment: "Evimdeki sigorta sürekli atıyordu, Turna Elektrik hızlıca gelip sorunu kökten çözdü. Çok teşekkürler.", stars: 5, date: "2 hafta önce" },
    { name: "Selin K.", location: "Beşiktaş", comment: "Evdeki elektrik arızası için aradık, çok hızlı geldiler ve sorunu hemen çözdüler. Güler yüzlü ve temiz işçilik.", stars: 5, date: "1 ay önce" },
    { name: "Mehmet T.", location: "Şişli", comment: "İstanbul'da bulabileceğiniz en iyi usta. Yeni taşındığım evimin tüm avize ve priz montajlarını titizlikle yaptılar.", stars: 5, date: "3 hafta önce" },
    { name: "Fatma A.", location: "Ümraniye", comment: "Gece yarısı elektrikler gitti, sabah erkenden geldiler ve çok makul fiyata çözdüler. Teşekkürler!", stars: 5, date: "1 hafta önce" },
    { name: "Emre D.", location: "Ataşehir", comment: "Ofisimizin tüm elektrik tesisatını yenilediler. Profesyonel ekip, kaliteli malzeme. Kesinlikle tavsiye ederim.", stars: 5, date: "2 ay önce" },
    { name: "Ayşe B.", location: "Bakırköy", comment: "Uydu sistemi kurulumu için çağırdık. Hem hızlı hem de çok düzgün iş çıkardılar. Fiyat da gayet uygundu.", stars: 5, date: "1 ay önce" },
  ];

  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-yellow text-brand-dark text-sm font-bold px-4 py-1 rounded-full mb-4">MÜŞTERİ YORUMLARI</span>
          <h2 className="text-3xl md:text-4xl font-bold">Müşterilerimiz Ne Diyor?</h2>
          <div className="flex justify-center items-center gap-3 mt-4">
            <div className="flex text-brand-yellow">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={28} />)}
            </div>
            <span className="text-2xl font-bold">5.0</span>
            <span className="text-gray-400">/ 5.0</span>
          </div>
          <p className="text-gray-400 mt-2">Google İşletme Profilimizde <span className="text-brand-yellow font-semibold">50+ yorum</span> ile %100 Müşteri Memnuniyeti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-brand-yellow transition-all duration-300 relative group">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-yellow opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="flex text-brand-yellow mb-3">
                {[...Array(review.stars)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.location}</div>
                </div>
                <div className="text-xs text-gray-500">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/search?q=turna+elektrik+bağcılar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand-dark font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Tüm Google Yorumlarını Gör
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;