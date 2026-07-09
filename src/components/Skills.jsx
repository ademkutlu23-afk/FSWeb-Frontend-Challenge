import { skills } from "../data/data";

function Skills() {
  return (
    <section>
      <h2>Yetenekler</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;