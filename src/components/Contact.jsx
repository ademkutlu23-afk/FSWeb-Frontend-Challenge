import { profileData, sayfaVerileri } from "../data/data";
import { useSiteContext } from "../context/SiteContext";

function Contact() {
  const { dil } = useSiteContext();
  const contactText = sayfaVerileri[dil].contact;

  return (
    <section className="contact-section">
      <h2>{contactText.title}</h2>

      <p>{contactText.description}</p>

      <div className="contact-links">
        <a href="mailto:adem@example.com">{contactText.emailText}</a>

        <a href={profileData.github} target="_blank" rel="noreferrer">
          {contactText.githubText}
        </a>

        <a href={profileData.linkedin || "#"} target="_blank" rel="noreferrer">
          {contactText.linkedinText}
        </a>
      </div>
    </section>
  );
}

export default Contact;