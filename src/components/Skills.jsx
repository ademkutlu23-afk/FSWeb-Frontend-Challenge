import { skills, sayfaVerileri } from "../data/data";
import { useSiteContext } from "../context/SiteContext";

function Skills() {
  const { dil } = useSiteContext();
  const yazi = sayfaVerileri[dil] || sayfaVerileri.tr;

  return (
    <section className="skills-section">
      <h2 className="section-title">{yazi.skillsTitle}</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.id}>
            <div className="skill-icon">{skill.name.slice(0, 2)}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;