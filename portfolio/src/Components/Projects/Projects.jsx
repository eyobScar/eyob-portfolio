import React from "react";
import Project from "../Project/Project";
import { projects } from "../../Data/projects";
import image from "../../assets/food_delivery.png";

const Projects = () => {
  return (
    <section className=" " id="projects">
      <div className="text-center">
        <h3 className="text-2xl dark:text-white text-black">My Projects</h3>
        <hr className="w-20 mx-auto text-primary border-none h-1 bg-primary my-2" />
        <p className="text-black/80 dark:text-white/80">Projects I have built </p>
      </div>
      <div className="flex justify-center">
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
              projectCategory={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
