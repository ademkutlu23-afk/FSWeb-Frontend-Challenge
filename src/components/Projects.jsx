import { useState } from "react";

import pizzaProject from "../assets/pizza-project.png";
import kampanyalarProject from "../assets/kampanyalar-container.png";
import gdprProject from "../assets/gdpr-project.png";
import calculatorProject from "../assets/calculator-project.png";
import bookStoreProject from "../assets/book-store.png";
import friendsDatabaseProject from "../assets/friends-database.png";
import movieDatabaseProject from "../assets/movie-database-v3.png";
import contactsAppProject from "../assets/contacts-app.png";
import imdbReduxProject from "../assets/imdb-redux.png";
import twitterCloneProject from "../assets/twitter-clone.png";
import aiChatbotProject from "../assets/ai-chatbot.png";

import { projects, sayfaVerileri } from "../data/data";
import { useSiteContext } from "../context/SiteContext";
import { FaPaw } from "react-icons/fa";

function Projects() {
  const { dil } = useSiteContext();
  const yazi = sayfaVerileri[dil] || sayfaVerileri.tr;
  const projectTexts = yazi.projectTexts;

  const [activeSlide, setActiveSlide] = useState(0);

  const projectImages = {
    1: pizzaProject,
    3: kampanyalarProject,
    4: gdprProject,
    5: calculatorProject,
    6: bookStoreProject,
    7: friendsDatabaseProject,
    8: movieDatabaseProject,
    9: contactsAppProject,
    10: imdbReduxProject,
    11: twitterCloneProject,
    12: aiChatbotProject,
  };

  const projectSlides = [];

  for (let i = 0; i < projects.length; i += 2) {
    projectSlides.push(projects.slice(i, i + 2));
  }

  function nextSlide() {
    if (activeSlide === projectSlides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  }

  function prevSlide() {
    if (activeSlide === 0) {
      setActiveSlide(projectSlides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  }

  function renderProjectCard(project) {
    const projectText = projectTexts.find((item) => item.id === project.id);
    const projectImage = projectImages[project.id];

    return (
      <article className="project-card" key={project.id}>
        <div className="project-image">
          {projectImage ? (
            <img src={projectImage} alt={projectText.title} />
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

          {(project.github || project.live) && (
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  {projectText.githubText}
                </a>
              )}

              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  {projectText.liveText}
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <section className="projects-section">
      <div className="projects-top">
        <h2 className="projects-title">{yazi.projectsTitle}</h2>

        <div className="project-slider-buttons">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>
      </div>

      <div className="project-slider-page">
        {projectSlides[activeSlide].map((project) => renderProjectCard(project))}
      </div>

      <div className="project-dots">
        {projectSlides.map((slide, index) => (
          <button
            key={index}
            className={activeSlide === index ? "active-dot" : ""}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Projects;