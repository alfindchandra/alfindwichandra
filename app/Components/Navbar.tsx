"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [IsVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed md:top-5 inset-x-0 max-w-4xl mx-auto z-50 bg-slate-300 md:rounded-full transition-transform duration-700
            ${IsVisible ? "translate-y-0" : "-translate-y-96"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 ">
            <a href="" className="flex items-center">
              <div className="relative w-10 h-10 md:w-14 md:h-14 mr-1">
                <Image
                  src="/images/home.png"
                  alt="Workflow"
                  fill
                  className="rounded-full border-2 border-teal-800 object-cover"
                />
              </div>

              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                Alfin Dwi Chandra
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
            >
              Beranda
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
            >
              Tentang
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
            >
              Proyek
            </a>
            <a
              href="#sertifikat"
              className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
            >
              Sertifikat
            </a>
            <Link
              href="https://wa.me/6281382176161"
              className="bg-teal-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-[0_4px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_8px_30px_rgba(20,184,166,0.5)]"
            >
              Hubungi Saya
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-teal-50 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 max-h-96"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <nav className="px-4 py-3 sm:px-6 md:px-8 lg:px-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0">
                <a
                  href="#home"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 font-medium transition-colors duration-300"
                >
                  Beranda
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 font-medium transition-colors duration-300"
                >
                  Tentang
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 font-medium transition-colors duration-300"
                >
                  Proyek
                </a>
                <a
                  href="#sertifikat"
                  className="block px-3 py-2 rounded-lg text-gray-700 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 font-medium transition-colors duration-300"
                >
                  Sertifikat
                </a>
              </div>

              <Link
                href="https://wa.me/6281382176161"
                className="inline-flex items-center justify-center mt-4 sm:mt-0 px-6 py-3 bg-teal-500 text-white rounded-full font-semibold shadow-md hover:bg-teal-600 transform hover:scale-105 hover:rotate-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 active:bg-teal-700"
              >
                Hubungi Saya
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
