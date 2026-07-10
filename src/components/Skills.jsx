import { skills } from "../data/data";

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.id}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;