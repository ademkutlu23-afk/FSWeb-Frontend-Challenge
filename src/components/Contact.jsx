import axios from "axios";
import { profileData, sayfaVerileri } from "../data/data";
import { useSiteContext } from "../context/SiteContext";

function Contact() {
  const { dil } = useSiteContext();
  const contactText = sayfaVerileri[dil].contact;

  async function handleContactClick() {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          name: "Adem Kutlu",
          email: "ademkutlu23@gmail.com",
          message: "Portfolio contact link clicked",
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="contact-section">
      <h2>{contactText.title}</h2>

      <p>{contactText.description}</p>

      <a
        className="contact-mail"
        href="mailto:ademkutlu23@gmail.com"
        onClick={handleContactClick}
      >
        ademkutlu23@gmail.com
      </a>

      <div className="contact-links">
        <a href={profileData.github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href={profileData.linkedin || "#"} target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="mailto:ademkutlu23@gmail.com" onClick={handleContactClick}>
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;