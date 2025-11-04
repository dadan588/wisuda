import { ArrowUp10 } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  
  // Ganti URL foto lo di sini (sementara)
  const [photoUrl, setPhotoUrl] = useState<string | null>(
    "/ai1.jpeg" // sementara placeholder, nanti gue ganti dengan foto lo
  );

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full opacity-60 animate-bounce"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Photo Container */}
          <div className="relative inline-block">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-yellow-300 shadow-2xl bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center">
              {photoUrl ? (
                <img
                  src="public/images/ai5.jpg"
                  alt="Foto Wisuda"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="text-gray-400 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Foto Wisuda</p>
                </div>
              )}
            </div>

            {/* Decorative ring animation */}
            <div
              className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-30 animate-ping"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif text-gray-800 leading-tight">
              Selamat{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-600">
                Wisuda
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600">
              Cinta Hatiku ❤️
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hari yang telah lama kamu nantikan akhirnya tiba. Kamu berhasil
            meraih impianmu dengan penuh perjuangan dan dedikasi.
          </p>

          {/* Decorative elements */}
          <div className="flex justify-center space-x-4 text-yellow-400">
            <span className="text-2xl animate-pulse">✨</span>
            <span className="text-3xl">🎓</span>
            <span className="text-2xl animate-pulse">✨</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
