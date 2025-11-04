export default function CongratsMessage() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-800 leading-tight">
              Untuk Wanita <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-600">Terhebat</span> dalam Hidupku
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="text-lg md:text-xl leading-relaxed">
              Hari ini bukan hanya hari kelulusanmu, tapi juga hari dimana aku semakin bangga memilikimu. 
              Setiap malam begadang, setiap tugas yang dikerjakan, setiap ujian yang dihadapi - 
              semua perjuanganmu telah membuahkan hasil yang indah.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Kamu telah membuktikan bahwa tidak ada yang tidak mungkin ketika kita memiliki tekad yang kuat. 
              Gelar yang kamu raih hari ini adalah bukti nyata dari kerja keras, kecerdasan, dan ketekunanmu.
            </p>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100">
              <p className="text-xl md:text-2xl font-serif text-gray-800 italic">
                "Kamu bukan hanya lulusan terbaik di mataku, tapi juga wanita terkuat yang pernah aku kenal. 
                Selamat wisuda, sayangku! 💕"
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-6 text-4xl">
            <span className="animate-pulse">🌟</span>
            <span>💖</span>
            <span className="animate-pulse">🌟</span>
          </div>
        </div>
      </div>
    </section>
  );
}