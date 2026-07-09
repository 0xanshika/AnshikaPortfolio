import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import DSAJourney from "../components/DSAJourney";
import Projects from "../components/Projects";
import MiniProjects from "../components/MiniProjects";
import Certificates from "../components/Certificates";
import Achievements from "../components/Achievements";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <MiniProjects />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}