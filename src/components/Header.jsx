import { useSiteContext } from "../context/SiteContext";

function Header() {
  const { dil, tema, dilDegistir, temaDegistir } = useSiteContext();

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">AK</div>

        <button className="nav-button language-button" onClick={dilDegistir}>
          {dil === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}
        </button>
      </div>

      <div className="header-right">
        <button className="nav-button theme-button" onClick={temaDegistir}>
          {tema === "light" ? "DARK MODE" : "LIGHT MODE"}
        </button>
      </div>
    </header>
  );
}

export default Header;