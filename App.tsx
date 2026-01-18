import React from 'react';
import EmergencyBanner from './components/EmergencyBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <EmergencyBanner />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChat />
      <WhatsAppButton />
    </div>
  );
};

export default App;