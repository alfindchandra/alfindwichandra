import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Sangat profesional dan memberikan hasil yang melebihi ekspektasi. Proyek website e-commerce kami selesai tepat waktu dengan fitur yang lengkap.",
      name: "Andi Firmansyah",
      position: "CEO, Tech Solutions",
      image: "/api/placeholder/100/100",
    },
    {
      id: 2,
      content:
        "Kemampuan teknis yang luar biasa dan selalu responsif terhadap perubahan kebutuhan. Solusi yang diberikan selalu efisien dan mudah dikelola.",
      name: "Siti Rahayu",
      position: "Marketing Director, StartupID",
      image: "/api/placeholder/100/100",
    },
    {
      id: 3,
      content:
        "Komunikasi sangat baik selama pengerjaan proyek. Mampu menerjemahkan ide kami menjadi aplikasi yang user-friendly dan estetis.",
      name: "Budi Santoso",
      position: "Product Manager, Digital Kreasi",
      image: "/api/placeholder/100/100",
    },
  ];

  return (
    <section id="testimonials" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Apa yang klien saya katakan tentang kerja sama dan hasil yang telah
            dicapai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-blue-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">{testimonial.content}</p>
              <div className="flex mt-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
