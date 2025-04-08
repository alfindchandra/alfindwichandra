"use client";
import { useState, useEffect } from "react";
import { Linkedin, Twitter, Instagram, Github, Book } from "lucide-react";

const TypewriterText = ({
  text,
  speed = 100,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};
const Jumbotron = () => {
  const [IsVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <div className="min-h-screen flex" id="home">
        <div
          className={`fixed left-0 top-1/2 transform -translate-y-1/2 bg-slate-300 p-4 shadow-lg shadow-primary rounded-r-xl hidden sm:block transition-transform duration-300 
            ${IsVisible ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col space-y-6">
            <a
              href="https://www.linkedin.com/in/alfin-dwi-chandra-41208117a"
              className="text-gray-600 hover:text-blue-600 hover:bg-teal-400 hover:rounded-xl hover:p-3 transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#twitter"
              className="text-gray-600 hover:text-blue-400 hover:bg-teal-400 hover:rounded-xl hover:p-3 transition-all"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/_adchandra_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="text-gray-600 hover:text-red-600 hover:bg-teal-400 hover:rounded-xl hover:p-3 transition-all"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com/alfindchandra"
              className="text-gray-600 hover:text-gray-900 hover:bg-teal-400 hover:rounded-xl hover:p-3 transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-teal-600 hover:bg-teal-400 hover:rounded-xl hover:p-3 transition-all"
            >
              <Book size={24} />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="md:text-5xl text-3xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
              HAY, SAYA <TypewriterText text="ALFIN DWI CHANDRA" speed={150} />
            </h1>
            <p className="md:text-xl text-sm text-gray-400 leading-relaxed mb-8">
              <TypewriterText
                text="Selamat datang di website saya dan selamat melihat-lihat.disini merupakan perkenalan singkat tentang saya, ini adalah salah satu portofolio saya. Semoga anda senang 😂"
                speed={50}
              />
            </p>
            <a
              href="https://drive.google.com/file/d/1hSzs8deZxJ3dycqyXIy_ehvhihzjpIRi/view?usp=drive_link"
              className="bg-teal-500 text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              CV SAYA
            </a>
            <div className="mt-8  block sm:hidden">
              <div className="my-4">
                <h1>Follow Me</h1>
              </div>
              <div className="flex flex-row space-x-8 items-center justify-center">
                <a
                  href="www.linkedin.com/in/alfin-dwi-chandra-41208117a"
                  className="text-primary hover:text-blue-600 transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#twitter"
                  className="text-primary hover:text-blue-400 transition-all"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/_adchandra_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="text-primary hover:text-red-600 transition-all"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://github.com/alfindchandra"
                  className="text-primary hover:text-gray-900 transition-all"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#portfolio"
                  className="text-primary hover:text-teal-600 transition-all"
                >
                  <Book size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center items-start">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-move-down"></div>
        </div>
        <span className="text-sm text-gray-500">Scroll</span>
      </div>
    </>
  );
};

export default Jumbotron;
