import React from "react";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Dopefolio",
    description:
      "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    image: "/images/home.png",
    link: "/projects/dopefolio",
  },
  {
    id: 2,
    title: "Wilsonport",
    description:
      "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
    image: "/images/home.png",
    link: "/",
  },
  {
    id: 3,
    title: "Boreal Coffee Clone",
    description:
      "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.",
    image: "/images/home.png",
    link: "/projects/boreal-coffee-clone",
  },
  {
    id: 4,
    title: "Crown Template",
    description:
      "Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.",
    image: "/images/home.png",
    link: "/projects/crown-template",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here you will find some of the personal and client projects that I
            created, with each project containing its own case study
          </p>
        </div>

        <div className="space-y-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row items-center shadow-lg rounded-lg overflow-hidden"
            >
              <div className="md:w-1/2 p-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <Link
                  href={project.link}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
