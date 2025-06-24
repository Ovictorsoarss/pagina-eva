import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";

const Testimonials = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 2,
      spacing: 32,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 16 },
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

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  const images = [
    "/assets/pv1.webp",
    "/assets/pv2.webp",
    "/assets/pv3.webp",
    "/assets/pv5.webp",
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-indigo-900 to-violet-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Histórias de Transformação e Encanto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-5xl mx-auto mb-8">
          <div ref={sliderRef} className="keen-slider">
            {images.map((src, index) => (
              <div key={index} className="keen-slider__slide flex justify-center">
                <div className="w-full max-w-sm overflow-hidden rounded-xl border-2 border-yellow-400 shadow-lg">
                  <img
                    src={src}
                    alt={`Depoimento ${index + 1}`}
                    className="w-full h-full object-contain bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute -left-3 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-1.5 rounded-full text-white transition-all backdrop-blur-sm z-10"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute -right-3 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-1.5 rounded-full text-white transition-all backdrop-blur-sm z-10"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Dots de navegação */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === idx
                    ? "bg-orange-400 scale-110"
                    : "bg-black"
                }`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
