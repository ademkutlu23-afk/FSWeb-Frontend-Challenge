import { skills } from "../data/data";

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <article className="skill-item" key={skill.id}>
            <div className="skill-icon">{skill.name.slice(0, 2)}</div>
            <span>{skill.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;