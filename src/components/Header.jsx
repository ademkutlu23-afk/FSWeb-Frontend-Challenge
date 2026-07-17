import { useSiteContext } from "../context/SiteContext";

function Header() {
  const { dil, tema, dilDegistir, temaDegistir } = useSiteContext();

  return (
    <header className="header">
      <div className="logo">AK</div>

      <nav className="nav">
        <button className="nav-button" onClick={temaDegistir}>
          {tema === "light" ? "DARK MODE" : "LIGHT MODE"}
        </button>

        <span className="divider">|</span>

        <button className="nav-button" onClick={dilDegistir}>
          {dil === "tr" ? "ENGLISH" : "TÜRKÇE"}
        </button>
      </nav>
    </header>
  );
}

export default Header;