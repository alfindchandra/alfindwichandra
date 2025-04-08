"use client";
import { useState } from "react";
import { Code, Globe, Github } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "Dashboard admin untuk mengelola produk, pesanan, dan pengguna dengan visualisasi data interaktif.",
      image: "/api/placeholder/600/350",
      category: "web",
      tags: ["Next.js", "Tailwind CSS", "MongoDB", "Redux"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Aplikasi cuaca real-time dengan fitur perkiraan 7 hari dan peringatan cuaca.",
      image: "/api/placeholder/600/350",
      category: "mobile",
      tags: ["React Native", "API Integration", "Geolocation"],
      demoUrl: "https://example.com/weather-app",
      githubUrl: "https://github.com/yourusername/weather-app",
    },
    {
      id: 3,
      title: "Blog Platform",
      description:
        "Platform blog dengan fitur markdown editor dan sistem komentar.",
      image: "/api/placeholder/600/350",
      category: "web",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
      demoUrl: "https://example.com/blog",
      githubUrl: "https://github.com/yourusername/blog-platform",
    },
    {
      id: 4,
      title: "Task Management App",
      description:
        "Aplikasi manajemen tugas dengan fitur drag-and-drop dan pengingat.",
      image: "/api/placeholder/600/350",
      category: "web",
      tags: ["React", "Firebase", "Tailwind CSS"],
      demoUrl: "https://example.com/task-app",
      githubUrl: "https://github.com/yourusername/task-management",
    },
    {
      id: 5,
      title: "Restaurant Finder",
      description:
        "Aplikasi pencari restoran dengan integrasi peta dan ulasan pengguna.",
      image: "/api/placeholder/600/350",
      category: "mobile",
      tags: ["React Native", "Google Maps API", "Firebase"],
      demoUrl: "https://example.com/restaurant-finder",
      githubUrl: "https://github.com/yourusername/restaurant-finder",
    },
    {
      id: 6,
      title: "Crypto Tracker",
      description:
        "Dashboard untuk melacak harga cryptocurrency dengan grafik dan notifikasi harga.",
      image: "/api/placeholder/600/350",
      category: "web",
      tags: ["Next.js", "Chart.js", "CoinGecko API"],
      demoUrl: "https://example.com/crypto-tracker",
      githubUrl: "https://github.com/yourusername/crypto-tracker",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-300">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek yang telah saya kerjakan. Setiap
            proyek mencerminkan pendekatan saya dalam menyelesaikan masalah dan
            membangun solusi digital.
          </p>
        </div>

        {/* Filter Buttons */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Globe size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
