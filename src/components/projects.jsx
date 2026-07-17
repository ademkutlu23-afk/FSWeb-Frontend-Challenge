import { projects } from "../data/data";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image">Görsel</div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-techs">
               {project.araclar.map((arac, index) => (
  <span key={index}>{arac}</span>
))}
              </div>

              <div className="project-links">
                <a href={project.github}>GitHub</a>
                <a href={project.live}>View Site</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;