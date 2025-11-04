import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function LoveMessageModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-yellow-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800">
            Ada Sesuatu <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-600">Spesial</span> Untukmu
          </h2>
          
          <p className="text-gray-600 text-lg">
            Pesan khusus yang telah aku siapkan dengan sepenuh hati untuk merayakan pencapaian luar biasa ini
          </p>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
              >
                💌 Buka Pesan Cinta
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-2xl bg-gradient-to-br from-pink-50 to-yellow-50 border-2 border-pink-200">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-center text-gray-800 mb-4">
                  💕 Pesan Khusus Untukmu 💕
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 p-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌹</div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg font-serif italic text-center">
                    "Untuk wanita yang telah mengubah hidupku menjadi lebih bermakna..."
                  </p>

                  <div className="bg-white/70 rounded-xl p-6 shadow-md">
                    <p className="mb-4">
                      Sayang, hari ini bukan hanya tentang gelar yang kamu raih, tapi tentang perjalanan luar biasa yang telah kamu lalui. 
                      Aku telah menyaksikan setiap perjuanganmu, setiap air mata yang kamu tumpahkan, dan setiap senyuman kemenangan yang kamu ukir.
                    </p>

                    <p className="mb-4">
                      Kamu telah mengajarkanku arti dari ketekunan, dedikasi, dan tidak pernah menyerah. 
                      Setiap malam begadang yang kamu lalui, setiap tugas yang kamu selesaikan dengan sempurna, 
                      semua itu membuatku semakin yakin bahwa aku memilih wanita yang tepat untuk dicintai.
                    </p>

                    <p className="mb-4">
                      Hari ini, ketika kamu menerima ijazah itu, aku tidak hanya bangga sebagai pacarmu, 
                      tapi juga sebagai seseorang yang beruntung bisa menjadi bagian dari perjalanan indah ini. 
                      Kamu adalah inspirasi terbesarku, motivasi terkuatku, dan cinta sejatiku.
                    </p>

                    <p className="text-center font-serif text-lg text-pink-700 mt-6">
                      Selamat wisuda, cinta hatiku. Masa depan cerah menanti kita berdua! ✨
                    </p>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="font-serif text-gray-600">Dengan cinta yang tak terbatas,</p>
                    <p className="font-serif text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-600 font-semibold">
                      Pacarmu yang selalu mendukung 💖
                    </p>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 text-3xl">
                  <span className="animate-pulse">💕</span>
                  <span>🌟</span>
                  <span className="animate-pulse">💕</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex justify-center space-x-6 text-2xl mt-8">
            <span className="animate-bounce">💌</span>
            <span className="animate-pulse">💖</span>
            <span className="animate-bounce">💌</span>
          </div>
        </div>
      </div>
    </section>
  );
}