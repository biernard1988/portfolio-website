import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    image: "/xrental.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

function ProjectSection() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold mt-4">My Projects</h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <button className="rounded-full border-2 border-cyan-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectSection;
