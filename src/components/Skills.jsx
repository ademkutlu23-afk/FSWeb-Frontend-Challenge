import { skills, sayfaVerileri } from "../data/data";
import { useSiteContext } from "../context/SiteContext";
import {
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";

function Skills() {
  const { dil } = useSiteContext();
  const yazi = sayfaVerileri[dil] || sayfaVerileri.tr;

  const skillIcons = {
    JavaScript: <FaJs />,
    React: <FaReact />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Git: <FaGitAlt />,
    Figma: <FaFigma />,
  };

  return (
    <section className="skills-section">
      <h2 className="section-title">{yazi.skillsTitle}</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <a
            className="skill-item"
            key={skill.id}
            href={skill.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className={`skill-icon ${skill.name.toLowerCase()}`}>
              {skillIcons[skill.name]}
            </div>

            <span>{skill.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Skills;