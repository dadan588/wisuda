import { useState } from "react";

export default function PhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const photos = [
    {
      id: 1,
      src: "/images/ai1.jpg",
    },
    {
      id: 2,
      src: "/images/ai8.jpg",
    },
    {
      id: 3,
      src: "/images/ai3.jpg",
    },
    {
      id: 4,
      src: "/images/ai11.jpg",
    },
    {
      id: 5,
      src: "public/images/ai7.jpg",
    },
    {
      id: 6,
      src: "/images/ai6.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openModal = (index: number) => {
    setCurrentSlide(index);
    setShowModal(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3">
            Perjalanan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-600">
              Indah
            </span>{" "}
            Kita
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Setiap momen dalam perjalanan kuliahmu adalah kenangan berharga yang
            akan selalu aku ingat.
          </p>
        </div>

        {/* Main Slideshow */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative bg-gradient-to-br from-pink-100 to-yellow-100 rounded-xl overflow-hidden shadow-xl">
            <div className="h-56 md:h-72 relative">
              <img
                onClick={() => openModal(currentSlide)}
                src={photos[currentSlide].src}
                className="object-cover w-full h-full cursor-pointer hover:opacity-90 transition-all"
              />

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-center">
                <h3 className="text-base md:text-lg font-serif mb-1">
                </h3>
                <p className="text-xs md:text-sm opacity-90">
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center space-x-1 mt-4">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-gradient-to-r from-pink-500 to-yellow-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => openModal(index)}
              className={`aspect-square rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 ${
                index === currentSlide ? "ring-2 ring-pink-300" : ""
              }`}
            >
              <img
                src={photo.src}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-all"
          onClick={() => setShowModal(false)}
        >
          <div className="relative max-w-3xl w-full px-4">
            <img
              src={photos[currentSlide].src}
              className="rounded-lg w-full object-contain max-h-[80vh] mx-auto"
            />
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
