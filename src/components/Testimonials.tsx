import React, { useState, useEffect } from 'react';
import { ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import "keen-slider/keen-slider.min.css";

const Testimonials = () => {
  const [likes, setLikes] = useState<{ [key: number]: number }>({
    0: 24,
    1: 12,
    2: 120,
    3: 55,
    4: 51,
    5: 68
  });

  const [likedCards, setLikedCards] = useState<{ [key: number]: boolean }>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

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

  useEffect(() => {
    const savedLikedCards = localStorage.getItem('likedTestimonialCards');
    if (savedLikedCards) {
      setLikedCards(JSON.parse(savedLikedCards));
    }
  }, []);

  const testimonials = [
    {
      name: "Laysa Nunes",
      image: "/assets/testimonials/laysa.webp",
      workImage: "/assets/testimonials/LaysaD.webp",
      comment: "Fiz meu primeiro molde logo no primeiro dia de aula e o resultado ficou PROFISSIONAL! As professoras ficaram impressionadas e eu percebi na hora que escolhi o curso certo. Nunca imaginei aprender tão rápido algo tão complexo! 💥🔥"
    },
    {
      name: "Ana Karina Artesã",
      image: "/assets/testimonials/anakarina.webp",
      workImage: "/assets/testimonials/AnaD.webp",
      comment: "Achei que seria complicado, mas o passo a passo é tão claro que, em um mês, consegui vender bastante e estou fazendo encomendas especiais. O curso realmente me deu o empurrão que eu precisava!"
    },
    {
      name: "Carolina Almeida",
      image: "/assets/testimonials/carol.webp",
      workImage: "/assets/testimonials/CarolD.webp",
      comment: "Antes do curso, minhas peças pareciam rascunho de iniciante 😅 Agora cada criação minha sai com acabamento impecável e estilo profissional! O que era motivo de vergonha, hoje é motivo de orgulho."
    },
    {
      name: "Raquel Bossari",
      image: "/assets/testimonials/raquel.webp",
      workImage: "/assets/testimonials/RaquelD.webp",
      comment: "Achei que seria complicado, mas o passo a passo é tão claro que, em um mês, consegui vender bastante e estou fazendo encomendas especiais. O curso realmente me deu o empurrão que eu precisava!"
    },
    {
      name: "Andrea Flores",
      image: "/assets/testimonials/andre.webp",
      workImage: "/assets/testimonials/andrea.webp",
      comment: "A Maleta da Leitura virou meu xodó! 😍 Os moldes são tão incríveis que dá vontade de produzir o dia inteiro. Já tô até planejando montar kits e começar a vender porque essa belezura aqui chama atenção de longe!"
    },
    {
      name: "Ateliê Helena Vieira",
      image: "/assets/testimonials/helena.webp",
      workImage: "/assets/testimonials/helenad.webp",
      comment: "Eu quase desisti dos moldes em EVA… tudo saía torto, sem graça. Mas depois que entrei no curso, tudo mudou: minhas peças ficaram com acabamento profissional, as clientes começaram a elogiar e as vendas começaram a rolar. Foi o empurrão que eu precisava!"
    }
  ];

  const handleLike = (index: number) => {
    if (!likedCards[index]) {
      const newLikedCards = { ...likedCards, [index]: true };
      setLikedCards(newLikedCards);
      localStorage.setItem('likedTestimonialCards', JSON.stringify(newLikedCards));

      setLikes(prev => ({
        ...prev,
        [index]: prev[index] + 1
      }));
    }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-indigo-900 to-violet-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            DEPOIMENTOS DE ALUNAS EM 2025
          </h2>
          <p className="text-lg text-indigo-200">
            Arrasta pro lado e veja como nossas alunas estão transformando talento em renda de verdade!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="px-4">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="keen-slider__slide flex justify-center">
                  <div className="w-full max-w-sm bg-white/5 backdrop-blur-sm p-4 rounded-xl border-2 border-yellow-400 shadow-md transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                          width="48"
                          height="48"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    </div>

                    <p className="text-base text-indigo-100 mb-4 leading-normal">{testimonial.comment}</p>

                    <div className="w-full aspect-square mb-4 overflow-hidden rounded-lg border-2 border-yellow-400">
                      <img
                        src={testimonial.workImage}
                        alt={`Trabalho de ${testimonial.name}`}
                        loading="lazy"
                        width="400"
                        height="400"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <button 
                      onClick={() => handleLike(index)}
                      className={`flex items-center gap-2 transition-colors duration-200 text-sm ${
                        likedCards[index] 
                          ? 'text-pink-400 cursor-default' 
                          : 'text-indigo-300 hover:text-indigo-200'
                      }`}
                      disabled={likedCards[index]}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>{likes[index]} curtidas</span>
                    </button>
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
      </div>
    </div>
  );
};

export default Testimonials;
