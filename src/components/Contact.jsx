import axios from "axios";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
          name: profileData.name,
          email: profileData.email,
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
        href={`mailto:${profileData.email}`}
        onClick={handleContactClick}
      >
        {profileData.email}
      </a>

      <div className="contact-links">
        <a
          href={profileData.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href={profileData.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href={profileData.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href={`mailto:${profileData.email}`}
          onClick={handleContactClick}
          aria-label="Email"
        >
          <MdEmail />
        </a>
      </div>
    </section>
  );
}

export default Contact;