import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect, useRef } from "react";

const queryClient = new QueryClient();

function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      const playMusic = async () => {
        try {
          await audio.play();
          console.log("🎵 Musik auto-play berhasil");
        } catch (err) {
          console.warn("⚠️ Autoplay diblokir browser:", err);
        }
      };
      playMusic();
    }
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay>
      <source src="/musik-wisuda.mp3" type="audio/mpeg" />
    </audio>
  );
}

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

      {/* 🔊 Musik otomatis tanpa tombol */}
      <BackgroundMusic />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
