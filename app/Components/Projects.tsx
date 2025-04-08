import React from "react";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Monkey D'Coffe",
    description:
      "Monkey D'Coffe is a coffee shop and I created their website from scratch using the frontend tools I know.",
    image: "/images/home.png",
    link: "/Components/MonkeyDcoffee",
  },
  {
    id: 2,
    title: "Wilsonport",
    description:
      "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
    image: "/images/home.png",
    link: "/Components/dopefolio",
  },
  {
    id: 3,
    title: "Boreal Coffee Clone",
    description:
      "I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.",
    image: "/images/home.png",
    link: "/Components/boreal",
  },
  {
    id: 4,
    title: "Crown Template",
    description:
      "Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.",
    image: "/images/home.png",
    link: "/Components/crown-template",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <Link
                  href={project.link}
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2"
                >
                  Lihat
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
