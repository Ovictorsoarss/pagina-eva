// Hero.tsx
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
            <span role="img" aria-label="calendar">📅</span>
            <span className="text-xs font-semibold text-white">{currentDate}</span>
          </div>
        </div>

        <div className="mb-4">
          <img src="/assets/Logonação.webp" alt="Logo Nção Encantada por EVA" className="max-w-[180px] w-full h-auto mx-auto" />
        </div>

        <div className={`text-center mb-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
<h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-snug px-2 text-center">
  <span className="block">Abra as Portas para o Encanto:</span>
  <span className="block text-xl md:text-2xl whitespace-nowrap md:whitespace-normal">
    Entre na <span className="text-pink-400">Nação Encantada por Feltro</span> e
  </span>
  <span className="block text-[#faff00]">Viva a Magia de 2025!</span>
</h1>

          <p className="text-sm md:text-base lg:text-lg text-indigo-200 mt-2 max-w-2xl mx-auto">
            Mais que um curso ou comunidade, é um universo mágico onde criatividade e tendências se encontram, conectando apaixonados por feltro e transformando sua arte em algo extraordinário.
          </p>
        </div>

        <div id="vid_684cf3a9b903d6f8d47ebffb" style={{ position: 'relative', width: '100%', paddingTop: '177.77%' }}>
          <img
            id="thumb_684cf3a9b903d6f8d47ebffb"
            src="https://images.converteai.net/19c48418-f175-4c45-9733-6603921b387b/players/684cf3a9b903d6f8d47ebffb/thumbnail.jpg"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            alt="thumbnail"
          />
          <div
            id="backdrop_684cf3a9b903d6f8d47ebffb"
            style={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
          ></div>
        </div>

        {/* Botão adicional logo abaixo do vídeo */}
<div className="mt-6 mb-4">
  <button
    onClick={scrollToPurchase}
    className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg px-8 py-3 rounded-md shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:scale-105 transition-all"
  >
    Quero fazer parte da Nação Encantada por E.V.A
    <span className="absolute inset-0 rounded-md border-2 border-white/30 animate-ping opacity-75"></span>
  </button>
</div>
        <p className="text-white text-xl mb-8 text-center">
          Veja o que você vai conseguir fazer com suas próprias mãos 👇🏻✨
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
