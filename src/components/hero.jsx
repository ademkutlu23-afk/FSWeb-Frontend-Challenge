import { profileData } from "../data/data";

function Hero() {
  return (
    <section>
      <h1>{profileData.name}</h1>
      <h2>{profileData.title}</h2>
      <p>{profileData.description}</p>

      <a href={profileData.github} target="_blank">
        GitHub
      </a>
    </section>
  );
}

export default Hero;