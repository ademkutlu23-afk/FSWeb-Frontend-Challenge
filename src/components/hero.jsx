import { sayfaVerileri, profileData } from "../data/data";
import { useSiteContext } from "../context/SiteContext";

function Hero() {
  const { dil } = useSiteContext();
  const hero = sayfaVerileri[dil].hero;

  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-small-text">{hero.smallText}</p>

        <h1 className="hero-title">
          {hero.title} <br />
          {hero.job}
        </h1>

        <p className="hero-description">{hero.description}</p>

        <div className="hero-buttons">
          <a
            className="hero-button"
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
          >
            {hero.githubText}
          </a>

          <a
            className="hero-button secondary"
            href={profileData.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {hero.linkedinText}
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-placeholder">
  <span className="avatar-text">AK</span>
</div>
      </div>
    </section>
  );
}

export default Hero;