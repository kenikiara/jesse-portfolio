import SmoothScroll from "../components/SmoothScroll";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Featured from "../components/Featured";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Featured />
        <Projects />
        <Credentials />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
