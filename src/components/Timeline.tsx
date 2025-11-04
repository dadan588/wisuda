export default function Timeline() {
  const milestones = [
    {
      year: "2021",
      title: "Awal Perjalanan",
      description: "Hari pertama masuk kuliah dengan semangat dan harapan besar",
      icon: "🎒",
    },
    {
      year: "2022",
      title: "Semester Pertengahan",
      description: "Mulai menemukan passion dan fokus pada bidang yang diminati",
      icon: "📚",
    },
    {
      year: "2023",
      title: "Praktikum & Proyek",
      description: "Mengaplikasikan teori ke dalam praktik dengan berbagai proyek menarik",
      icon: "⚗️",
    },
    {
      year: "2024",
      title: "Tugas Akhir",
      description: "Perjuangan terakhir dengan penelitian dan skripsi yang menantang",
      icon: "📝",
    },
    {
      year: "2025",
      title: "Wisuda!",
      description: "Akhirnya meraih gelar dengan bangga dan siap menghadapi masa depan",
      icon: "🎓",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
            Timeline{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-pink-600">
              Perjalanan
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Setiap langkah dalam perjalanan kuliahmu adalah bukti ketekunan dan
            dedikasi yang luar biasa
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-300 to-pink-300 rounded-full"></div>

          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0
                    ? "md:text-right md:pr-8"
                    : "md:text-left md:pl-8"
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3">{milestone.icon}</div>
                  <h3 className="text-xl font-serif text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Year circle */}
              <div className="absolute md:static left-1/2 -translate-x-1/2 md:translate-x-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white mt-6 md:mt-0">
                <span className="text-white font-bold text-sm">
                  {milestone.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 text-2xl">
            <span className="animate-pulse">⭐</span>
            <span className="text-gray-600 font-serif text-lg">
              Dan perjalanan baru dimulai...
            </span>
            <span className="animate-pulse">⭐</span>
          </div>
        </div>
      </div>
    </section>
  );
}
