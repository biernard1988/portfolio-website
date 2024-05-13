"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "XRENTAL - Apartments Finder",
    description:
      "Final Project of WBS Coding School: The app is dedicated to providing an intuitive, user-friendly experience of renting a property for both prospective tenants and owners. Technologies applied: React, Vite, Javascript, HTML5, CSS3, Bootstrap, Fontawesome, Git/Github, Node, Render",
    image: "/xrental.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/X-Rental-Apartments-Finder",
    previewUrl: "https://xrental.onrender.com/",
  },
  {
    id: 2,
    title: "Chácara GAIA",
    description:
      "This is a website dedicated to promoting ecotourism and offering seasonal rentals at a charming countryside farm in Brazil. Technologies applied: Nextjs, Typescript, HTML5, CSS3, Tailwind, Shadcnui, Git/Github, Node/Bun, Vercel",
    image: "/gaia.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/gaia",
    previewUrl: "https://chacaragaia.vercel.app/",
  },
  {
    id: 3,
    title: "Country List",
    description:
      "Explore a comprehensive list of countries with their flags and names, and easily search for specific countries using a user-friendly search bar. Technologies applied: Nextjs, Typescript, HTML5, CSS3, Tailwind, Lucide Icons, Git/Github, Node/Bun, REST API, Vercel",
    image: "/countrylist.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/country-list",
    previewUrl: "https://country-list-bcosta.vercel.app/",
  },
  {
    id: 4,
    title: "KinoFlix",
    description:
      "This application fetches and displays a grid of popular movies from The Movie Database (TMDb). It features a clean and responsive layout that adapts to different screen sizes. Technologies applied: Nextjs, Javascript, HTML5, CSS3, Tailwind, Lucide Icons, Git/Github, Node/Bun, REST API, Vercel",
    image: "/movie-list.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/movie-list",
    previewUrl: "https://movie-list-bcosta.vercel.app/",
  },
  {
    id: 5,
    title: "MyWeather App",
    description:
      "This application fetches and displays weather information for a given city. It features a visually appealing interface with a wallpaper background and clear weather data presentation. Technologies applied:  Nextjs, Javascript, HTML5, CSS3, Tailwind, React Icons, Git/Github, Node/Bun, REST API, Vercel",
    image: "/weather-app.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/weather-app",
    previewUrl: "https://weather-app-bcosta.vercel.app/",
  },
  {
    id: 6,
    title: "Pokefight",
    description:
      "A game project created during the WBS Coding School bootcamp 2023/2024. It contains basic HTML5, CSS3, Javascript and Reactjs",
    image: "/pokefight.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/biernard1988/Pokefight",
    previewUrl: "https://pokefight-044.netlify.app/",
  },
  {
    id: 7,
    title: "To Do List",
    description:
      "Project created during the WBS Coding School bootcamp 2023/2024. It contains basic HTML5, CSS3 and Javascript functionalities",
    image: "/todolist.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/biernard1988/ToDoList",
    previewUrl: "https://biernard1988.github.io/ToDoList/",
  },
  {
    id: 8,
    title: "Orcute",
    description:
      "A blog project created during the WBS Coding School bootcamp 2023/2024. It contains basic HTML5, CSS3, Javascript and Reactjs",
    image: "/orcute.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/biernard1988/blog-project",
    previewUrl: "https://orcute.vercel.app/",
  },
  {
    id: 9,
    title: "Cookbook",
    description:
      "Project created during the WBS Coding School bootcamp 2023/2024. It contains basic HTML5, CSS3, Javascript, Reactjs and Contentful CMS",
    image: "/cookbook.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/biernard1988/cookbook",
    previewUrl: "https://cookbook-wd44.vercel.app/",
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
