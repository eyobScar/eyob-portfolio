import React from "react";
import Project from "../Project/Project";
import { projects } from "../../Data/projects";
import image from "../../assets/food_delivery.png";

const Projects = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-5 flex justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {projects.map((project) => (
          <Project
            key={project.id}
            image={image}
            projectTitle={project.title}
            projectDescription={project.description}
            projectTechs={project.techs}
            projectLiveURL={project.liveURL}
            projectGithubURL={project.githubURL}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
