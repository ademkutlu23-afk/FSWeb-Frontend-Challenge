import { projects, sayfaVerileri } from "../data/data";
import { useSiteContext } from "../context/SiteContext";

function Projects() {
  const { dil } = useSiteContext();
  const yazi = sayfaVerileri[dil] || sayfaVerileri.tr;
  const projectTexts = yazi.projectTexts;

  return (
    <section className="projects-section">
      <h2 className="projects-title">{yazi.projectsTitle}</h2>

      <div className="projects-list">
        {projects.map((project) => {
          const projectText = projectTexts.find((item) => item.id === project.id);

          return (
            <article className="project-card" key={project.id}>
              <div className="project-image">
  <span>{projectText.title}</span>
</div>

              <div className="project-info">
                <h3>{projectText.title}</h3>
                <p>{projectText.description}</p>

                <div className="project-techs">
                  {project.araclar.map((arac, index) => (
                    <span key={index}>{arac}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github || "#"}>{projectText.githubText}</a>
                  <a href={project.live || "#"}>{projectText.liveText}</a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;