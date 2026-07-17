import { profileInfo, sayfaVerileri } from "../data/data";
import { useSiteContext } from "../context/SiteContext";

function Profile() {
  const { dil } = useSiteContext();
  const profileText = sayfaVerileri[dil].profile;

  return (
    <section className="profile-section">
      <h2 className="profile-title">{profileText.title}</h2>

      <div className="profile-content">
        <div className="profile-info">
          <h3>{profileText.basicTitle}</h3>

          <p>
            <strong>{profileText.birthDateLabel}:</strong>{" "}
            {profileInfo.birthDate}
          </p>

          <p>
            <strong>{profileText.cityLabel}:</strong> {profileInfo.city}
          </p>

          <p>
            <strong>{profileText.educationLabel}:</strong>{" "}
            {profileInfo.education}
          </p>

          <p>
            <strong>{profileText.roleLabel}:</strong> {profileInfo.role}
          </p>
        </div>

        <div className="profile-image-placeholder">
  <span className="avatar-text">AK</span>
</div>

        <div className="profile-about">
          <h3>{profileText.aboutTitle}</h3>
          <p>{profileText.about}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;