import { useState, useEffect } from 'react';

export default function RomanticQuote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('romantic-quote');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="romantic-quote" className="py-32 bg-gradient-to-r from-pink-100 via-white to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Quote marks */}
            <div className="text-6xl md:text-8xl text-pink-300 font-serif leading-none mb-6">"</div>
            
            {/* Main quote */}
            <blockquote className="text-2xl md:text-4xl font-serif text-gray-800 leading-relaxed mb-8 italic">
              Cinta sejati bukan hanya tentang menemukan seseorang yang sempurna, 
              tapi tentang melihat seseorang yang tidak sempurna dengan cara yang sempurna.
            </blockquote>

            {/* Sub quote */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Dan hari ini, aku melihatmu meraih impianmu dengan cara yang paling sempurna. 
              Kamu adalah inspirasi terbesar dalam hidupku.
            </p>

            {/* Signature */}
            <div className="inline-block">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-pink-200">
                <p className="text-gray-700 font-serif text-lg">
                  Dengan cinta yang tak terbatas,
                </p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-600 font-serif text-xl font-semibold mt-2">
                  Pacarmu yang bangga ❤️
                </p>
              </div>
            </div>

            {/* Closing quote mark */}
            <div className="text-6xl md:text-8xl text-pink-300 font-serif leading-none mt-6 flex justify-end">"</div>
          </div>

          {/* Floating hearts */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-pink-300 text-2xl animate-pulse"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '2s'
                }}
              >
                💕
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}