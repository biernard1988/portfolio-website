"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "XRENTAL - Apartments Finder",
    description:
      "The App is dedicated to providing an intuitive, user-friendly experience for both prospective tenants and owners. A WBS CODING SCHOOL Full Stack Web and App Development Final Project created by Bernard Almeida da Costa, Eudes Costa Junior & Nnaemeka C. Emesowum",
    image: "/xrental.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/X-Rental-Apartments-Finder",
    previewUrl: "https://xrental.onrender.com/",
  },
  {
    id: 2,
    title: "To Do List",
    description:
      "Project created during the WBS Coding School bootcamp 2023/2024. It contains basic HTML5, CSS3 and Javascript functionalities",
    image: "/todolist.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/ToDoList",
    previewUrl: "https://biernard1988.github.io/ToDoList/",
  },
  {
    id: 3,
    title: "Orcute",
    description:
      "A blog project created during the WBS Coding School bootcamp 2023/2024. It contains basic HTML5, CSS3, Javascript and Reactjs",
    image: "/orcute.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/biernard1988/blog-project",
    previewUrl: "https://orcute.vercel.app/",
  },
  {
    id: 4,
    title: "Cookbook",
    description:
      "Project created during the WBS Coding School bootcamp 2023/2024. It contains basic HTML5, CSS3, Javascript, Reactjs and Contentful CMS",
    image: "/cookbook.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/biernard1988/cookbook",
    previewUrl: "https://cookbook-wd44.vercel.app/",
  },
  {
    id: 5,
    title: "Pokefight",
    description:
      "A game project created during the WBS Coding School bootcamp 2023/2024. It contains basic HTML5, CSS3, Javascript and Reactjs",
    image: "/pokefight.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/biernard1988/Pokefight",
    previewUrl: "https://pokefight-044.netlify.app/",
  },
  {
    id: 6,
    title: "Country List",
    description:
      "Country List project created for study purposes using Nextjs, Typescript, Tailwind CSS, REST API and Lucide Icons",
    image: "/countrylist.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/country-list",
    previewUrl: "https://country-list-bcosta.vercel.app/",
  },
  {
    id: 7,
    title: "KinoFlix",
    description:
      "Movie List project created for study purposes using Nextjs, Tailwind CSS, REST API and Lucide Icons",
    image: "/movie-list.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/movie-list",
    previewUrl: "https://movie-list-bcosta.vercel.app/",
  },
  {
    id: 8,
    title: "MyWeather App",
    description:
      "Weather App project created for study purposes using Nextjs, Tailwind CSS, REST API and React Icons",
    image: "/weather-app.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/weather-app",
    previewUrl: "https://weather-app-bcosta.vercel.app/",
  },
];

function ProjectSection() {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <section id="projects">
        <h2 className="text-center text-4xl font-bold mt-4">My Projects</h2>
        <div className="flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
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
      </section>
    </>
  );
}

export default ProjectSection;
