"use client";
import { useState } from "react";

import { Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const [filter] = useState("all");

  const projects = [
    {
      id: 4,
      title: "Absensi Karyawan",
      description:
        "web site ini untuk memudahkan untuk melakukan absensi karyawan",
      image: "/images/flutter.png",
      category: "web app",
      tags: ["Flutter", "API", "Laravel"],
      demoUrl: "https://example.com/task-app",
      githubUrl: "https://github.com/alfindchandra",
    },
    {
      id: 1,
      title: "Inovasi Adiwarna Raya",
      description:
        "Inovasi Adiwarna Raya adalah perusahaan teknologi loT terkemuka yang berbasis di Indonesia.",
      image: "/images/inovasiadi.png",
      category: "web",
      tags: ["Laravel", "Tailwind CSS"],
      demoUrl: "https://example.com/demo",
      githubUrl: "https://github.com/alfindchandra/Adiwarna_Raya",
    },
    {
      id: 2,
      title: "Monkey D'coffee",
      description:
        "Mokey D'coffee merupkan coffee shop yang bagus di Bojonegoro, coffee shop yang bernuansa alam. ",
      image: "/images/coffee.png",
      category: "mobile",
      tags: ["Laravel", "Boostrep"],
      demoUrl: "https://example.com/weather-app",
      githubUrl: "https://github.com/alfindchandra/kopi-shop",
    },
    {
      id: 3,
      title: "Mazabuta Grub",
      description:
        "Mazabuta Group - Fokus dalam bisnis yang berkaitan dengan pengelolaan lingkungan dan kebersihan kota. ",
      image: "/images/maza1.png",
      category: "web",
      tags: ["Laravel", "Tailwind CSS"],
      demoUrl: "https://example.com/blog",
      githubUrl: "https://github.com/alfindchandra/MazabutaGrub",
    },

    {
      id: 5,
      title: "Toko Bu Joni",
      description:
        "Web site ini untuk memudahkan peanggan untuk membeli makanan dan minuman di Toko Bu Joni. ",
      image: "/images/bujoni1.png",
      category: "web",
      tags: ["Laravel", "Tailwind CSS"],
      demoUrl: "https://example.com/restaurant-finder",
      githubUrl: "https://github.com/alfindchandra/tokowa",
    },
    {
      id: 6,
      title: "Gor Bojonegoro",
      description:
        "Web Site merupakan hasil pemikiran saya tentang kota Bojonegoro, agar gor ini mudah dikunjungi. ",
      image: "/images/gor.png",
      category: "web",
      tags: ["Laravel", "Tailwind CSS"],
      demoUrl: "https://example.com/crypto-tracker",
      githubUrl: "https://github.com/alfindchandra/",
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
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className=" object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
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
                <h3 className="text-xl font-bold text-gray-100 mb-2">
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
