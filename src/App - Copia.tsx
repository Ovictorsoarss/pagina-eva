import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Purchase from './components/Purchase';
import Testimonials from './components/Testimonials';
import Certificate from './components/Certificate';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <div className="app">
      <Hero />
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal">
        <Features />
      </div>
      <div className="reveal">
        <Purchase />
      </div>
      <div className="reveal">
        <Certificate />
      </div>
      <div className="reveal">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;