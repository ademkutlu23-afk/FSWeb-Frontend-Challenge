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
          <div className="skill-item" key={skill.id}>
            <div className={`skill-icon ${skill.name.toLowerCase()}`}>
  {skillIcons[skill.name]}
</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;