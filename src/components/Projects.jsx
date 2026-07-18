import pizzaProject from "../assets/pizza-project.png";
import { projects, sayfaVerileri } from "../data/data";
import { useSiteContext } from "../context/SiteContext";
import { FaPaw } from "react-icons/fa";

function Projects() {
  const { dil } = useSiteContext();
  const yazi = sayfaVerileri[dil] || sayfaVerileri.tr;
  const projectTexts = yazi.projectTexts;

  const projectImages = {
    1: pizzaProject,
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">{yazi.projectsTitle}</h2>

      <div className="projects-list">
        {projects.map((project) => {
          const projectText = projectTexts.find(
            (item) => item.id === project.id
          );

          return (
            <article className="project-card" key={project.id}>
              <div
                className={
                  projectImages[project.id]
                    ? "project-image"
                    : "project-image project-logo-image"
                }
              >
                {projectImages[project.id] ? (
                  <img src={projectImages[project.id]} alt={projectText.title} />
                ) : (
                  <div className="pati-project-logo">
                    <FaPaw />
                    <span>PatiDose</span>
                  </div>
                )}
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
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {projectText.githubText}
                  </a>

                  <a href={project.live} target="_blank" rel="noreferrer">
                    {projectText.liveText}
                  </a>
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