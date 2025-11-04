import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useRef } from "react";

const queryClient = new QueryClient();

// 🔊 Komponen Musik Latar
function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0; // mulai dari volume 0 (fade-in)
    
    // Efek fade-in lembut
    const fadeIn = () => {
      let vol = 0;
      const fade = setInterval(() => {
        if (audio.volume < 0.5) {
          vol += 0.05;
          audio.volume = Math.min(vol, 0.5);
        } else {
          clearInterval(fade);
        }
      }, 200);
    };

    // Coba auto-play musik
    const tryPlay = async () => {
      try {
        await audio.play();
        console.log("🎵 Musik auto-play berhasil");
        fadeIn();
      } catch {
        console.warn("⚠️ Autoplay diblokir — menunggu interaksi user");
      }
    };

    tryPlay();

    // Kalau gagal autoplay, tunggu user klik pertama
    const handleUserInteract = async () => {
      try {
        await audio.play();
        console.log("🎵 Musik mulai setelah klik user");
        fadeIn();
        document.removeEventListener("click", handleUserInteract);
      } catch (err) {
        console.warn("Masih gagal play:", err);
      }
    };

    document.addEventListener("click", handleUserInteract);

    return () => document.removeEventListener("click", handleUserInteract);
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/musik-wisuda.mp3" type="audio/mpeg" />
    </audio>
  );
}

// 🌸 Main App
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* 🔊 Musik otomatis + fallback interaksi user */}
      <BackgroundMusic />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
