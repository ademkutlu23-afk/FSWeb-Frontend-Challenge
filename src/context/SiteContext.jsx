import { createContext, useContext, useState } from "react";

const SiteContext = createContext();

export function SiteContextProvider({ children }) {
  const [dil, setDil] = useState(localStorage.getItem("dil") || "tr");
  const [tema, setTema] = useState(localStorage.getItem("tema") || "light");

 function dilDegistir() {
  if (dil === "tr") {
    setDil("en");
    localStorage.setItem("dil", "en");
  } else {
    setDil("tr");
    localStorage.setItem("dil", "tr");
  }
}

  function temaDegistir() {
  if (tema === "light") {
    setTema("dark");
    localStorage.setItem("tema", "dark");
  } else {
    setTema("light");
    localStorage.setItem("tema", "light");
  }
}

  return (
    <SiteContext.Provider value={{ dil, tema, dilDegistir, temaDegistir }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteContext() {
  return useContext(SiteContext);
}