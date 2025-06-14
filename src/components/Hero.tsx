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

    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/19c48418-f175-4c45-9733-6603921b387b/players/684cf3a9b903d6f8d47ebffb/player.js";
    script.async = true;
    document.head.appendChild(script);
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
            <span className="text-sm" role="img" aria-label="calendar">🗕️</span>
            <span className="text-xs font-semibold text-white">{currentDate}</span>
          </div>
        </div>

        <div className={`text-center mb-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img
            src="/assets/Logonação.webp"
            alt="Logo Nacão Encantada por EVA"
            className="mx-auto mb-4 w-48"
          />

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

        {/* ...restante do componente permanece igual... */}

      </div>
    </div>
  );
};

export default Hero;
