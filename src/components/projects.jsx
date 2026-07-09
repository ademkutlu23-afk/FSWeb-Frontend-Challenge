import { projects } from "../data/data";

function Projects() {
  return (
    <section>
      <h2>Projeler</h2>

      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Projects;