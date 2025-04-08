import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Laptop } from "lucide-react";

interface ProjectDetailPage {
  params: {
    projectId: string;
  };
}

const projectDetails = {
  MonkeyDcoffee: {
    title: "MonkeyD'coffee",
    description:
      "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    image: "/images/home.png",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    challenges: [
      "Creating a responsive design",
      "Optimizing performance",
      "Ensuring cross-browser compatibility",
    ],
    features: [
      "Modern, clean UI",
      "Responsive layout",
      "SEO optimized",
      "Open-source",
    ],
    githubLink: "https://github.com/yourusername/dopefolio",
    liveLink: "https://dopefolio.com",
  },
  boreal: {
    title: "boreal-coffee-clone",
    description:
      "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    image: "/images/home.png",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    challenges: [
      "Creating a responsive design",
      "Optimizing performance",
      "Ensuring cross-browser compatibility",
    ],
    features: [
      "Modern, clean UI",
      "Responsive layout",
      "SEO optimized",
      "Open-source",
    ],
    githubLink: "https://github.com/yourusername/dopefolio",
    liveLink: "https://dopefolio.com",
  },
  // Add other project details similarly
};

const ProjectDetailPage = ({ params }: { params: { projectId: string } }) => {
  const project =
    projectDetails[params.projectId as keyof typeof projectDetails];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8">
          {project.title}
        </h1>

        <div className="my-10">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="rounded-xl shadow-md object-cover w-full aspect-video"
          />
        </div>

        <div className="bg-gray-50 shadow-lg rounded-xl p-8">
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-700 leading-relaxed prose">
              {project.description}
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Technologies", items: project.technologies },
              { title: "Challenges", items: project.challenges },
              { title: "Features", items: project.features },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2 text-blue-500">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={project.githubLink}
              target="_blank"
              aria-label="Live Demo"
              className="text-white bg-[#24292F] hover:bg-[#24292F]/60 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              {" "}
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
              </svg>
              Sign in with Github
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              aria-label="Live Demo"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              {" "}
              <Laptop size={22} className="mr-2" />
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
