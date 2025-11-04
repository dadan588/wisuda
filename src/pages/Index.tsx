import HeroSection from '@/components/HeroSection';
import CongratsMessage from '@/components/CongratsMessage';
import PhotoGallery from '@/components/PhotoGallery';
import Timeline from '@/components/Timeline';
import RomanticQuote from '@/components/RomanticQuote';
import LoveMessageModal from '@/components/LoveMessageModal';

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CongratsMessage />
      <PhotoGallery />
      <Timeline />
      <RomanticQuote />
      <LoveMessageModal />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100 to-yellow-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-4">
            <p className="text-gray-600 font-serif text-lg">
              Dibuat dengan 💕 untuk merayakan pencapaian luar biasamu
            </p>
            <div className="flex justify-center space-x-4 text-2xl">
              <span>🎓</span>
              <span>💖</span>
              <span>✨</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 - Sebuah karya cinta untuk wisudawan tersayang
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}