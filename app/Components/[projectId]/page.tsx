import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailProps {
  params: {
    projectId: string;
  };
}

const projectDetails = {
  dopefolio: {
    title: "Dopefolio",
    description:
      "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    image: "/dopefolio.jpeg",
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

const ProjectDetailPage: React.FC<ProjectDetailProps> = ({ params }) => {
  const project =
    projectDetails[params.projectId as keyof typeof projectDetails];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {project.title}
        </h1>

        <div className="mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Project Overview
            </h2>
            <p className="text-gray-600">{project.description}</p>
          </section>

          <div className="grid md:grid-cols-3 gap-6">
            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Challenges
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 flex space-x-4">
            <Link
              href={project.githubLink}
              target="_blank"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
            >
              View on GitHub
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
