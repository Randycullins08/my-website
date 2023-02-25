import { projectData } from "@/projectsData";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="project-header">
        <h1>Projects</h1>
      </div>

      {projectData?.map((project) => (
        <div className="project-content" key={project.id}>
          <div className="project">
            <div className="project-image">
              <a href={project.link} target="_blank">
                <img src={project.img} alt={project.alt} />
              </a>
            </div>

            <div>
              <a href={project.link} target="_blank">
                {project.title}
              </a>
              {project.description}
              {project.builtWith}
              {project.github}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
