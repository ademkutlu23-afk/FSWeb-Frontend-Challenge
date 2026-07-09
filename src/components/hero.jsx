import { profileData } from "../data/data";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-small-text">Merhaba 👋</p>

        <h1 className="hero-title">
          Ben {profileData.name}. <br />
          {profileData.title}
        </h1>

        <p className="hero-description">{profileData.description}</p>

        <div className="hero-buttons">
          <a className="hero-button" href={profileData.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a className="hero-button secondary" href={profileData.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-placeholder">Fotoğraf</div>
      </div>
    </section>
  );
}

export default Hero;