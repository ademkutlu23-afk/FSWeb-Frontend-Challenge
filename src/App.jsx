import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useSiteContext } from "./context/SiteContext";

function App() {
  const { tema } = useSiteContext();

  return (
    <main className={`app ${tema}`}>
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;