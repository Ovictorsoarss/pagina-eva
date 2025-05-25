import React from 'react';
import { Check, Users, TrendingUp, Palette, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";

const Features = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

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

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mulheres que querem renda extra",
      description: "Comece hoje mesmo e crie peças lindas sem precisar de experiência."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Iniciantes no artesanato",
      description: "Moldes prontos para facilitar seu início e garantir resultados incríveis."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Profissionais da área",
      description: "Amplie sua oferta com produtos únicos que encantam os clientes."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Quem busca uma nova profissão",
      description: "Transforme criatividade em lucro com um negócio flexível e promissor."
    }
  ];

  const scrollToBasicPlan = () => {
    const basicPlan = document.querySelector('#basic-plan');
    basicPlan?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-indigo-900 to-purple-900">
      {/* Blur circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/30 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">OS MOLDES DE E.V.A FORAM CRIADOS PARA ARTESÃS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="px-12">
            <div ref={sliderRef} className="keen-slider">
              {features.map((feature, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="relative group h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-white/20 transform hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-lg text-white">
                        {feature.icon}
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-indigo-200">{feature.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 text-emerald-400">
                        <Check className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute -left-2 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-2 rounded-full text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute -right-2 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-2 rounded-full text-white transition-all duration-300 backdrop-blur-sm z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={scrollToBasicPlan}
            className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
          >
            QUERO APROVEITAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;