import { profileInfo } from "../data/data";

function Profile() {
  return (
    <section className="profile-section">
      <h2 className="profile-title">Profile</h2>

      <div className="profile-content">
        <div className="profile-info">
          <h3>Basic Information</h3>

          <p><strong>Doğum tarihi</strong> {profileInfo.birthDate}</p>
          <p><strong>Şehir</strong> {profileInfo.city}</p>
          <p><strong>Eğitim Durumu</strong> {profileInfo.education}</p>
          <p><strong>Tercih Ettiği Rol</strong> {profileInfo.role}</p>
        </div>

        <div className="profile-image-box">
          <div className="profile-image-placeholder">Görsel</div>
        </div>

        <div className="profile-about">
          <h3>About Me</h3>
          <p>{profileInfo.about}</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;