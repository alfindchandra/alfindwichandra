"use client";

import Image from "next/image";
import { useState } from "react";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Dicoding Indonesia",

      date: "Januari 2024",
      credential: "CERT-2024-001",
      description:
        "Sertifikat kompetensi pengembangan web full stack dengan teknologi modern React, Node.js, dan database management.",
      image: "/images/aibeginer.png",
      verified: false,
    },
    {
      id: 2,
      title: "React Advanced Developer",
      issuer: "Meta Blueprint",
      date: "Maret 2024",
      credential: "META-REACT-2024",
      description:
        "Sertifikat lanjutan untuk pengembangan aplikasi React dengan state management dan optimasi performa.",
      image: "/images/dcoding.png",
      verified: true,
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Mei 2024",
      credential: "AWS-CP-2024-789",
      description:
        "Sertifikat fundamental cloud computing dan layanan AWS untuk deployment dan infrastruktur aplikasi.",
      image: "/images/gdg.jpg",
      verified: true,
    },
    {
      id: 4,
      title: "JavaScript Expert",
      issuer: "Dicoding Indonesia",
      date: "Juli 2024",
      credential: "JS-EXP-2024-456",
      description:
        "Sertifikat expert JavaScript untuk pengembangan aplikasi web modern dengan ES6+ dan framework terkini.",
      image: "/images/konseppemerograman.jpg",
      verified: true,
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="sertifikat"
      className="py-20 bg-gray-900 text-white min-h-screen"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Sertifikat & Penghargaan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Jelajahi koleksi sertifikat dan penghargaan yang telah saya peroleh,
            mencerminkan dedikasi dan kompetensi dalam berbagai bidang teknologi
            informasi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group relative bg-gray-800 rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-700 overflow-hidden"
              onClick={() => openModal(certificate.image)}
            >
              <div className="relative h-64 w-full rounded-lg overflow-hidden bg-gray-700 flex items-center justify-center">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {certificate.verified && (
                  <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-md">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold">
                    Lihat Detail
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mt-4 text-center truncate">
                {certificate.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full bg-gray-800 rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat mengklik gambar
          >
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 text-white text-4xl font-bold bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 z-10"
              aria-label="Tutup"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged Certificate"
              fill
              className="object-contain p-6"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
