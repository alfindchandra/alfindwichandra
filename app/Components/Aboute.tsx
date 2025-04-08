import React from "react";
import { Linkedin, Instagram } from "lucide-react";

const AboutMe = () => {
  const skills = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "PHP", category: "backend" },
    { name: "GIT", category: "tools" },
    { name: "Github", category: "tools" },
    { name: "Responsive Design", category: "frontend" },
    { name: "Terminal", category: "tools" },
  ];

  return (
    <div
      className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8"
      id="about"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-primary">
          Tentang Saya
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

        <p className="text-gray-300 text-center mb-16">
          Di sini Anda akan menemukan lebih banyak informasi tentang saya, apa
          yang saya lakukan, dan keterampilan saya saat ini sebagian besar dalam
          hal pemrograman dan teknologi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Get to know me section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Kenali saya!</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Saya adalah seorang{" "}
                <span className="text-gray-50">Pengembang Web</span> yang
                berfokus pada Frontend yang membangun dan mengelola Front-end
                Situs Web yang mengarah pada keberhasilan produk secara
                keseluruhan.
              </p>
              <p>
                Saya juga suka berbagi konten yang berkaitan dengan hal-hal yang
                telah saya pelajari selama bertahun-tahun dalam Pengembangan Web
                sehingga dapat membantu orang lain di Komunitas Pengembang.
              </p>
              <p>Jangan ragu untuk Terhubung atau Ikuti saya di</p>
              <div className="flex space-x-4">
                <a
                  href="www.linkedin.com/in/alfin-dwi-chandra-41208117a"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-900 transition-colors hover:text-white flex items-center"
                >
                  <Linkedin className="w-5 h-5 mr-1 text-blue-800" />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/_adchandra_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className=" text-transparent bg-clip-text bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:text-white transition-colors flex items-center"
                >
                  <Instagram className="w-5 h-5 mr-1 text-rose-600" />
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Skills section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">My Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 rounded-md text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
