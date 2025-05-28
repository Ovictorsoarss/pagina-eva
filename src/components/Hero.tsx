import React, { useEffect, useState } from 'react';
import { ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    setCurrentDate(`Atualizado hoje • ${date.toLocaleDateString('pt-BR', options)}`);
    setIsVisible(true);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 10 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  
  const scrollToPurchase = () => {
    const purchaseSection = document.querySelector('#purchase-section');
    purchaseSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const carouselImages = [
    "/assets/p0gZtiF.webp",
    "/assets/6uZT148.webp",
    "/assets/7VUzKXb.webp",
    "/assets/9ah8xe4.webp",
    "/assets/4vIndTy.webp",
    "/assets/grJ6TVa.webp",
    "/assets/HVfQjIX.webp",
    "/assets/NirmoK7.webp",
    "/assets/vampiro.webp",
    "/assets/Xm5MwVU.webp",
    "/assets/xSltdPF.webp",
    "/assets/ZdVPQs6.webp",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-4 md:py-8 flex flex-col items-center">

        <div className="mb-2">
          <div className="inline-flex items-center gap-2 bg-purple-700/90 px-3 py-1 rounded-full shadow-md border border-purple-400">
            <span className="text-sm" role="img" aria-label="calendar">📅</span>
            <span className="text-xs font-semibold text-white">{currentDate}</span>
          </div>
        </div>

        <div className={`text-center mb-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-snug px-2">
            <span className="text-white">Descubra </span>
            <span className="text-yellow-400">500 Moldes de E.V.A</span>
            <span className="text-white"> que estão transformando </span>
            <span className="text-pink-400">artesãs</span>
            <span className="text-white"> em </span>
            <span className="text-green-400">Empreendedoras de sucesso!</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-indigo-200 mt-2 max-w-2xl mx-auto">
            Transforme R$10 em R$2.700 por semana com os Moldes de E.V.A que Vendem no Automático!
          </p>
        </div>

        <div className={`relative w-full max-w-4xl mx-auto mb-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '400ms' }}>
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              loading="lazy"
              src="https://tudoemfeltro.shop/wp-content/uploads/2024/12/BARBEARIA-LUCRATIVA-2-1024x576.png" 
              alt="Moldes de EVA Lucrativos" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="absolute -right-4 top-0 md:top-10 transform rotate-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3 shadow-lg">
            <div className="flex items-center gap-1 text-white">
              <span className="font-bold">4.380</span>
              <span className="text-sm">ALUNAS</span>
            </div>
          </div>
        </div>

        <p className="text-white text-xl mb-8 text-center">
          Veja o que você vai conseguir fazer com suas próprias mãos ✨
        </p>

        <div className="relative w-full max-w-5xl">
          <div ref={sliderRef} className="keen-slider mb-12">
            {carouselImages.map((image, idx) => (
              <div key={idx} className="keen-slider__slide">
                <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl border border-white/20">
                  <img 
                    loading="lazy"
                    src={image} 
                    alt={`Exemplo de molde ${idx + 1}`}
                    className="w-full h-full object-contain mix-blend-multiply bg-white"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-2 rounded-full text-white transition-all backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-2 rounded-full text-white transition-all backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        <div className={`mb-8 text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '600ms' }}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3">
              <p className="text-gray-300 line-through">DE R$79,90</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg px-8 py-4 shadow-lg shadow-green-600/30 hover:scale-105 transition-all">
              <p className="text-white font-bold text-xl">
                POR APENAS <span className="text-2xl md:text-3xl">R$10</span>
              </p>
            </div>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <button 
            onClick={scrollToPurchase}
            className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:scale-105 transition-all"
          >
            QUERO APROVEITAR
            <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-75"></span>
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
